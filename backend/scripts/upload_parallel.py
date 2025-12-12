import os
import subprocess
import concurrent.futures
import sys
import time

# Configuration
DATA_DIR = os.path.join(os.path.dirname(__file__), '../../data/chunks')
BUCKET_NAME = 'austin-codes'
CONCURRENCY = 10

def get_files(directory):
    file_list = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_list.append(os.path.join(root, file))
    return file_list

def upload_file(file_path):
    # Calculate relative path for the key
    # We want the key to be relative to 'data/' folder, e.g. 'chunks/manifest.json'
    # The DATA_DIR is '.../data/chunks', so we go up one level to '.../data'
    base_data_dir = os.path.abspath(os.path.join(DATA_DIR, '..'))
    relative_key = os.path.relpath(file_path, base_data_dir).replace('\\', '/')
    
    cmd = ['raindrop', 'object', 'put', file_path, relative_key, '--bucket', BUCKET_NAME]
    
    # Run command from backend directory so it finds raindrop.manifest
    backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    # shell=True is required on Windows to find the 'raindrop' command (which is likely a .cmd file)
    result = subprocess.run(cmd, capture_output=True, text=True, shell=True, cwd=backend_dir)
    
    if result.returncode != 0:
        return False, f"Failed to upload {relative_key}: {result.stderr}"
    return True, relative_key

def main():
    print(f"Scanning {DATA_DIR}...")
    files = get_files(DATA_DIR)
    total_files = len(files)
    print(f"Found {total_files} files to upload.")
    
    if total_files == 0:
        return

    completed = 0
    start_time = time.time()

    with concurrent.futures.ThreadPoolExecutor(max_workers=CONCURRENCY) as executor:
        # Submit all tasks
        future_to_file = {executor.submit(upload_file, f): f for f in files}
        
        for future in concurrent.futures.as_completed(future_to_file):
            completed += 1
            success, msg = future.result()
            
            # Calculate progress
            percent = (completed / total_files) * 100
            elapsed = time.time() - start_time
            rate = completed / elapsed if elapsed > 0 else 0
            
            # Print progress bar
            bar_length = 30
            filled_length = int(bar_length * completed // total_files)
            bar = '█' * filled_length + '-' * (bar_length - filled_length)
            
            sys.stdout.write(f'\r[{bar}] {percent:.1f}% ({completed}/{total_files}) - {msg if not success else "OK"}')
            sys.stdout.flush()
            
            if not success:
                print(f"\nError: {msg}")

    print(f"\n\nUpload complete! Total time: {time.time() - start_time:.2f}s")

if __name__ == "__main__":
    main()
