import pdfplumber
import pandas as pd
import os
import json
import re
from PIL import Image
import io

# Configuration
DATA_DIR = os.path.join(os.path.dirname(__file__), '../../data')
OUTPUT_DIR = os.path.join(DATA_DIR, 'chunks')
MANIFEST_FILE = os.path.join(OUTPUT_DIR, 'manifest.json')

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

def safe_name(name):
    return re.sub(r'[^a-z0-9]', '_', name.lower())

def ingest_pdf(pdf_filename):
    pdf_path = os.path.join(DATA_DIR, pdf_filename)
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        return []

    base_name = safe_name(pdf_filename.replace('.pdf', ''))
    chunk_dir = os.path.join(OUTPUT_DIR, base_name)
    os.makedirs(chunk_dir, exist_ok=True)

    manifest_entries = []
    
    print(f"Processing {pdf_filename}...")
    
    with pdfplumber.open(pdf_path) as pdf:
        # Process in chunks of pages (e.g., chapters)
        # For simplicity, we'll group by physical pages or try to detect headers.
        # Given the complexity, let's do page-by-page but aggregate text until a new section.
        
        current_section_title = "Intro"
        current_text = []
        current_tables = []
        current_images = []
        
        for i, page in enumerate(pdf.pages):
            page_num = i + 1
            print(f"  Page {page_num}/{len(pdf.pages)}", end='\r')
            
            # 1. Extract Text
            text = page.extract_text()
            if text:
                # Naive Section Detection (looks for "§ 25-2-..." or similar)
                # If we find a section header, we flush the previous chunk
                lines = text.split('\n')
                for line in lines:
                    if line.strip().startswith('§') or line.strip().startswith('ARTICLE'):
                        # Flush previous section
                        if current_text:
                            save_chunk(base_name, current_section_title, current_text, current_tables, current_images, manifest_entries, chunk_dir)
                            current_text = []
                            current_tables = []
                            current_images = []
                            current_section_title = line.strip()[:50] # Truncate title
                    
                    current_text.append(line)
            
            # 2. Extract Tables
            tables = page.extract_tables()
            for table in tables:
                if table:
                    df = pd.DataFrame(table[1:], columns=table[0])
                    current_tables.append(df)

            # 3. Extract Images
            # pdfplumber image extraction is experimental/complex. 
            # We will use a simplified approach: extract raw image objects if possible.
            # For now, let's focus on tables and text as primary. 
            # (Image extraction often requires 'pdfminer.six' low-level access or 'pikepdf')
            # We'll skip complex image extraction for this V1 to ensure stability, 
            # unless the user explicitly provided 'images' in the prompt which they did.
            # Let's try basic image extraction if available in this version of pdfplumber.
            
            # Note: pdfplumber .images attribute gives metadata. 
            # To actually get the image, we often need to crop the page.
            for img in page.images:
                # Crop and save
                try:
                    # Bounding box: (x0, top, x1, bottom)
                    bbox = (img['x0'], img['top'], img['x1'], img['bottom'])
                    cropped_page = page.crop(bbox)
                    img_obj = cropped_page.to_image(resolution=150)
                    current_images.append(img_obj)
                except Exception as e:
                    pass # Ignore image errors

        # Flush last section
        if current_text:
            save_chunk(base_name, current_section_title, current_text, current_tables, current_images, manifest_entries, chunk_dir)

    print(f"\nFinished {pdf_filename}. Generated {len(manifest_entries)} chunks.")
    return manifest_entries

def save_chunk(base_name, title, text_lines, tables, images, manifest, chunk_dir):
    chunk_id = f"{base_name}_{len(manifest)}"
    safe_title = safe_name(title)
    
    # Save Text
    text_content = "\n".join(text_lines)
    text_filename = f"{chunk_id}_{safe_title}.txt"
    with open(os.path.join(chunk_dir, text_filename), 'w', encoding='utf-8') as f:
        f.write(text_content)
        
    # Save Tables
    table_files = []
    for idx, df in enumerate(tables):
        table_filename = f"{chunk_id}_{safe_title}_table_{idx}.csv"
        df.to_csv(os.path.join(chunk_dir, table_filename), index=False)
        table_files.append(table_filename)
        
    # Save Images
    image_files = []
    for idx, img_obj in enumerate(images):
        image_filename = f"{chunk_id}_{safe_title}_image_{idx}.jpg"
        img_obj.save(os.path.join(chunk_dir, image_filename))
        image_files.append(image_filename)
        
    manifest.append({
        "id": chunk_id,
        "title": title,
        "filename": os.path.join(base_name, text_filename).replace('\\', '/'),
        "text_content": text_content, 
        "tables": [os.path.join(base_name, tf).replace('\\', '/') for tf in table_files],
        "images": [os.path.join(base_name, imgf).replace('\\', '/') for imgf in image_files]
    })

def main():
    # Look for PDFs
    pdf_files = [f for f in os.listdir(DATA_DIR) if f.endswith('.pdf')]
    
    if not pdf_files:
        print("No PDF files found in data directory.")
        return

    all_manifest = []
    
    for pdf in pdf_files:
        entries = ingest_pdf(pdf)
        all_manifest.extend(entries)
        
    # Write Master Manifest
    with open(MANIFEST_FILE, 'w') as f:
        json.dump(all_manifest, f, indent=2)
    
    print(f"Global manifest written to {MANIFEST_FILE}")

if __name__ == "__main__":
    main()
