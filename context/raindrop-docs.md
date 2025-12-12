LiquidMetal Raindrop Documentation
Complete Developer Documentation
Total Pages: 69

Table of Contents
    1. 1. raindrop-code-quickstart
    2. 2. claude-code-mcp-setup
    3. 3. manual-hello-world-deployment
    4. 4. smartmemory-app-deployment
    5. 5. crud-api-with-raindrop-mcp
    6. 6. claude-code-raindrop-frontend-first
    7. 7. figma-make-tutorial
    8. 8. netlify-integration
    9. 9. actors
    10. 10. ai-models
    11. 11. annotations
    12. 12. bucket-storage
    13. 13. claude-code-raindrop-mcp
    14. 14. kv
    15. 15. observers
    16. 16. queues
    17. 17. services
    18. 18. smartbuckets
    19. 19. smartmemory
    20. 20. smartsql
    21. 21. sql
    22. 22. tasks
    23. 23. vector
    24. 24. actor
    25. 25. ai
    26. 26. annotations
    27. 27. architecture-patterns
    28. 28. ai-agent
    29. 29. api-gateway
    30. 30. background-job-processing
    31. 31. multi-agentic-system
    32. 32. retrieval-augmented-generation
    33. 33. bucket
    34. 34. cli
    35. 35. annotation
    36. 36. auth
    37. 37. bucket
    38. 38. build
    39. 39. dns
    40. 40. logs
    41. 41. mcp
    42. 42. object
    43. 43. query
    44. 44. raindrop-code
    45. 45. kv-cache
    46. 46. logging
    47. 47. manifest
    48. 48. mcp
    49. 49. new-application-workflow
    50. 50. observers
    51. 51. queue
    52. 52. reattach-session
    53. 53. secrets
    54. 54. services
    55. 55. smartbucket
    56. 56. smartmemory
    57. 57. smartsql
    58. 58. sql
    59. 59. task
    60. 60. update-application
    61. 61. vector
    62. 62. versioning
    63. 63. overview
    64. 64. installation
    65. 65. authentication
    66. 66. smartbucket
    67. 67. object-storage
    68. 68. smart-memory
    69. 69. smart-sql

Raindrop Code Quick Start
URL: https://docs.liquidmetal.ai/tutorials/raindrop-code-quickstart/
Raindrop Code Quick Start
Raindrop Code is an integrated AI development environment that transforms your terminal into a powerful application builder. Build complete applications with databases, APIs, and deployment infrastructure through natural language conversations and structured workflows.
Prerequisites
Before you begin:
LiquidMetal Account
: Sign up at
liquidmetal.run
Node.js
: Version 18 or higher
Installation Instructions
Run the following in your terminal to install Raindrop Code:
Terminal window
npm
i
-g
@liquidmetal-ai/raindrop
@liquidmetal-ai/raindrop-code
Start Building
Create a new directory for your raindrop project:
Terminal window
mkdir
new-raindrop-code
cd
new-raindrop-code
Run the following in your terminal to start Raindrop Code:
Terminal window
raindrop-code
Note
When prompted, type
y
to create the necessary files for
raindrop-code
and to authenticate with your Raindrop account.
Now you’re ready to start building with
raindrop-code
Create Your First Application
Start a New Raindrop App
Once Raindrop Code is running, create a new application:
Terminal window
/new-raindrop-app
What Happens:
Raindrop Code uses GLM 4.6 as the default model
All subagents are handled by GLM for consistent development experience
Guides you through a structured workflow to build your application
Generates architecture, infrastructure, and application code
Deploys to live infrastructure
Next
Raindrop MCP Quick Start

Raindrop MCP Quick Start
URL: https://docs.liquidmetal.ai/tutorials/claude-code-mcp-setup/
Raindrop MCP Quick Start
The Raindrop MCP server transforms AI coding tools into powerful infrastructure development platforms. Instead of just writing code, you can build complete applications with databases, APIs, and deployment infrastructure through structured, guided workflows.
Video Walkthrough
Play
Installation Instructions
Caution
Windows Users:
You must use WSL (Windows Subsystem for Linux) for this tutorial. Other Windows terminals are not supported.
Step 1: Install Claude Code
Terminal window
npm
install
-g
@anthropic-ai/claude-code
Step 2: Install Raindrop CLI
Terminal window
npm
install
-g
@liquidmetal-ai/raindrop
Step 3: Sign Up for Raindrop
Create your Raindrop account:
Sign up for a Raindrop account at
liquidmetal.run
Complete the account setup process
Step 4: Authenticate Raindrop CLI
Run the following command to authenticate the Raindrop CLI:
Terminal window
raindrop
auth
login
Step 5: Set Up MCP Integration
Run the installation command for Claude Code:
Terminal window
raindrop
mcp
install-claude
What this command does:
Configures Claude Code with the correct MCP server URL
Sets up raindrop.md and custom slash commands for Claude Code (
/new-raindrop-app
,
/update-raindrop-app
, and
/reattach-raindrop-session
)
Step 6: Start Claude Code
Start Claude Code
Run the MCP command:
/mcp
Select the
raindrop-mcp
server
Select
Authenticate
Login to your Raindrop account (or click
Allow Access
if you are already logged in)
Using the Raindrop MCP Server
Once configured, you have access to building complete applications through a guided workflow.
Start a New Application
Create a new Raindrop application from scratch:
Using Slash Command:
/new-raindrop-app
Using Direct MCP Call:
Claude, call the LiquidMetal Raindrop:login MCP tool to start a new application development session.
What Happens:
Creates a new session ID and timeline ID
Guides you through requirements gathering (PRD creation)
Generates application architecture and manifest
Sets up databases, services, and infrastructure
Implements complete application code
Deploys to live infrastructure
Validates deployment with endpoint testing
Next Steps
Explore the
Claude Code + Raindrop MCP
concept guide
Review
Raindrop MCP workflows
for detailed workflow documentation
Check out
Architecture Patterns
for advanced application designs
Previous
Raindrop Code Quick Start
Next
Manual Hello World Deployment

Manual Hello World Deployment
URL: https://docs.liquidmetal.ai/tutorials/manual-hello-world-deployment/
Manual Hello World Deployment
Build and deploy a simple “Hello World” Raindrop service using direct CLI commands. This approach gives you complete control over each step of the deployment process.
Recommended Approach
For building production applications, we recommend using the
automated Raindrop MCP workflow
which handles the entire development process through guided conversation with Claude Code.
Prerequisites
Raindrop CLI installed and authenticated
Node.js 18+ installed
Basic TypeScript knowledge
Text editor of your choice
Create Your Project
Initialize a new Raindrop application:
Terminal window
raindrop
build
init
hello-world
cd
hello-world
This command creates a new directory with your application name and sets up the basic project structure with a
raindrop.manifest
file.
Review Your Manifest
The
raindrop build init
command creates a basic manifest file with your service already configured:
raindrop.manifest
application
"hello-world"
{
service
"hello-service"
{
domain {
cname
=
"
hello-service
"
}
}
}
The service is automatically configured with a public domain that will be generated during deployment.
Generate Project Files
Run the generate command to create the necessary project structure:
Terminal window
raindrop
build
generate
This command creates the TypeScript service implementation and updates the project structure:
Directory
hello-world/
raindrop.manifest
package.json
tsconfig.json
Directory
src/
Directory
hello-service/
index.ts
index.test.ts
raindrop.gen.ts
Implement Your Service
Open
src/hello-service/index.ts
and replace the generated code with this implementation:
src/hello-service/index.ts
import
{ Service }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
return
new
Response
(
'
Hello World!
'
);
}
}
Install Dependencies
Install the required Node.js dependencies:
Terminal window
npm
install
Deploy Your Service
Deploy your service to the Raindrop cloud:
Terminal window
raindrop
build
deploy
--start
After deployment completes, you’ll see output similar to this:
Terminal window
Building
to
/Users/yourname/hello-world/dist
Building
entry
points:
/Users/yourname/hello-world/src/hello-service/index.ts
Build
successful
Uploaded
bundle
"
hello-service
"
🔔
You
deployed
a
full
version,
updates
will
require
a
full
versioned
deployment
to
work
📊
Watching
deployment
status...
hello-world
@01k0xyz...
Status:
running
Modules
(1)
└─
hello-service
-
running
-
https://svc-01k0xyz123abc.01jtgsh456xyz789.lmapp.run
──────────────────────────────────────────────────
Total:
1
modules
(1
running
)
Your service URL will be shown in the deployment output. Copy this URL to test your service.
Find Your Organization ID
Your organization ID appears in your Raindrop dashboard URL:
https://liquidmetal.run/o/org_<YOUR-ORG-ID>
Test Your Deployed Service
Test your service using curl with the URL from your deployment output:
Terminal window
curl
https://svc-01k0xyz123abc.01jtgsh456xyz789.lmapp.run
Expected response:
Hello World!
Make Changes and Redeploy
To update your service:
Edit
src/hello-service/index.ts
Run
raindrop build deploy --start
again
Test your changes
The deployment process typically takes 30-60 seconds.
Understanding the Workflow
You just completed the core Raindrop deployment workflow:
Manifest
- Declare your application architecture
Generate
- Create TypeScript files and project structure
Implement
- Write your service logic
Deploy
- Push to live infrastructure
This pattern scales from simple services to complex applications with databases, queues, and multiple interconnected services.
Previous
Raindrop MCP Quick Start
Next
SmartMemory App Deployment

SmartMemory App Deployment
URL: https://docs.liquidmetal.ai/tutorials/smartmemory-app-deployment/
SmartMemory App Deployment
Create and deploy a Raindrop application with SmartMemory that you can use with the MCP server. This gives you a deployed memory system that AI agents can access for persistent conversations and knowledge storage.
Prerequisites
Raindrop CLI installed and authenticated
Node.js 18+ installed
Basic understanding of AI agent memory concepts
Text editor of your choice
Create Your SmartMemory Project
Initialize a new Raindrop application:
Terminal window
raindrop
build
init
my-smartmemory-app
cd
my-smartmemory-app
Configure SmartMemory
Open the generated
raindrop.manifest
file and update it to include only SmartMemory:
raindrop.manifest
application
"my-smartmemory-app"
{
smartmemory
"agent-memory"
{}
}
The SmartMemory resource will be deployed and accessible via the MCP server.
Generate Project Files
Run the generate command to create the necessary project structure:
Terminal window
raindrop
build
generate
This creates the project structure with your SmartMemory resource:
Directory
my-smartmemory-app/
raindrop.manifest
package.json
tsconfig.json
Deploy Your SmartMemory Resource
Deploy your SmartMemory resource to the Raindrop cloud:
Terminal window
raindrop
build
deploy
--start
After deployment completes, you’ll see output similar to this:
Terminal window
Building
to
/Users/yourname/my-smartmemory-app/dist
Build
successful
🔔
You
deployed
a
full
version,
updates
will
require
a
full
versioned
deployment
to
work
📊
Watching
deployment
status...
my-smartmemory-app
@01k0xyz...
Status:
running
Modules
(1)
└─
agent-memory
-
running
-
no
urls
──────────────────────────────────────────────────
Total:
1
modules
(1
running
)
Your SmartMemory resource is now deployed and ready to use with the MCP server.
Using with MCP Server
Your deployed SmartMemory resource can now be accessed through the LiquidMetal MCP server. The MCP server will connect to your deployed SmartMemory instance to manage AI agent memories across conversations.
When configuring the MCP server, you’ll reference your deployed SmartMemory application. The MCP server will then handle session management, memory storage, and retrieval for AI agents using your deployed infrastructure.
For complete setup instructions, see the
Claude Code + Raindrop MCP Setup
tutorial.
Understanding SmartMemory
Your deployed SmartMemory resource provides four types of memory for AI agents: working, episodic, semantic, and procedural memory. Each serves different purposes in giving agents persistent memory capabilities across conversations and sessions.
To learn more about how these memory types work together, see the
SmartMemory concepts documentation
.
Previous
Manual Hello World Deployment
Next
Building a CRUD API with Claude Code + Raindrop MCP

Building a CRUD API with Claude Code + Raindrop MCP
URL: https://docs.liquidmetal.ai/tutorials/crud-api-with-raindrop-mcp/
Building a CRUD API with Claude Code + Raindrop MCP
Building a CRUD API with Claude Code + Raindrop MCP lets you go from idea to deployed, production-ready API in a single conversation. Instead of setting up databases, configuring authentication, or managing deployment infrastructure, you describe what you want and let the guided workflow handle everything automatically.
This tutorial shows you how to build a complete API without any frontend - perfect for mobile apps, third-party integrations, or microservices that need to be consumed by other applications.
Prerequisites
Before starting this tutorial, make sure you have:
Completed the
Claude Code + Raindrop MCP Setup
Basic understanding of REST APIs and CRUD operations
What You’ll Build
We’ll create a
Task Management API
that includes:
User management
with authentication and profiles
Project CRUD operations
(create, read, update, delete)
Task management
with assignments, due dates, and status tracking
Comments system
for task collaboration
File attachments
for tasks
Authentication
with JWT tokens
Live deployment
with public API endpoints
Step 1: Start the Raindrop MCP Workflow
Begin a new Claude Code session and use this prompt:
I want to build a Task Management CRUD API using the Raindrop MCP. Please call the liquidmetal-staging:login MCP tool to start a new application development session, then continue with the workflow.
Step 2: PRD Creation and Approval
When Claude asks you to describe your application for the PRD, provide this input:
I want to build a comprehensive task management API that includes:
Core Entities:
- Users (registration, authentication, profiles)
- Projects (create, update, delete, list, with user ownership)
- Tasks (full CRUD, assigned to users, belong to projects, with due dates, priority, status)
- Comments (users can comment on tasks)
- File attachments (users can attach files to tasks)
API Requirements:
- RESTful endpoints for all CRUD operations
- JWT-based authentication
- Proper authorization (users can only access their own projects/tasks)
- Input validation and error handling
- Pagination for list endpoints
- File upload support
- Database relationships between all entities
Please create a detailed PRD based on these requirements.
Claude may ask additional clarifying questions about specific features. Answer based on your needs, or approve the defaults if they work for your use case.
Step 3: Automated Backend Development
Once the PRD is approved, continue with this prompt:
Perfect! Please continue with the Raindrop MCP workflow to implement the complete API infrastructure. Make sure to include proper API documentation and example requests/responses for each endpoint.
The Raindrop MCP workflow will automatically:
Design database schemas
with proper relationships between users, projects, tasks, comments, and files
Generate API endpoints
for all CRUD operations with proper HTTP methods and status codes
Implement authentication
with JWT tokens and password hashing
Set up authorization
ensuring users can only access their own data
Configure file upload
handling with secure storage
Add input validation
and comprehensive error handling
Deploy to live infrastructure
with public API URLs
Run automated testing and validation
by calling each endpoint and checking outputs and logs
Auto-fix any issues
found during testing to ensure everything works correctly
Step 4: API Testing and Documentation
After deployment, use this prompt to get your API details:
Great! Now please provide me with:
1. The base URL for my deployed API
2. A complete list of all available endpoints
3. Example curl commands for each major operation (register, login, create project, create task, etc.)
4. The database schema that was created
5. Any API keys or authentication details I need
Step 5: Test Your API
You can now test your API using tools like:
curl
commands (provided by Claude)
Postman
or
Insomnia
for visual API testing
Your mobile app
or frontend application
Other services
that need to integrate with your API
Key Benefits
Building a CRUD API with Claude Code + Raindrop MCP eliminates all the setup complexity typically involved in backend development. You get production-ready infrastructure including databases, authentication, file storage, and deployment without writing boilerplate code or configuring servers. The guided workflow ensures your API follows best practices for security, validation, and REST conventions.
Next Steps
Once your API is deployed, you can:
Build a frontend
using the
Frontend-First Development tutorial
to create a UI for your API
Integrate with mobile apps
by using the provided endpoints and authentication
Add more features
using the
Update Existing Application workflow
Connect to third-party services
through webhooks or API integrations
Handle increased traffic
as your API automatically scales with demand
Your API is production-ready and can handle real users and data immediately after deployment.
Previous
SmartMemory App Deployment
Next
Frontend-First Development with Claude Code + Raindrop MCP

Frontend-First Development with Claude Code + Raindrop MCP
URL: https://docs.liquidmetal.ai/tutorials/claude-code-raindrop-frontend-first/
Frontend-First Development with Claude Code + Raindrop MCP
The frontend-first development approach with Claude Code + Raindrop MCP changes how you build applications. Build the frontend first with detailed API comments, then Claude analyzes your frontend and automatically generates a comprehensive PRD that captures every specification.
This approach provides two advantages:
No Manual PRD Writing
: Claude does all the work of creating detailed requirements by analyzing your working frontend code
Fully Specified APIs
: Your mock frontend ensures every API endpoint, request format, and response structure is completely defined before backend development begins
Prerequisites
Before starting this tutorial, make sure you have:
Completed the
Claude Code + Raindrop MCP Setup
Basic familiarity with frontend development concepts
Node.js and npm installed on your machine
The Development Flow
This tutorial follows a four-phase approach:
Frontend Development
: Build a complete Astro todo app with detailed API placeholders
Backend Planning
: Use Raindrop MCP to analyze the frontend and auto-generate the PRD
Backend Implementation
: Let Raindrop MCP build the backend to your exact specifications
Frontend Integration
: Connect your frontend to the deployed backend
Part 1: Frontend Development Phase
We’ll build a todo application frontend that includes all the features and API calls needed, but with detailed comments instead of real backend calls.
Step 1.1: Create the Frontend Project
Start a new Claude Code session and use this prompt:
I want to build a todo application frontend using Astro with TypeScript. The app should include:
- User authentication (login/register/logout)
- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos (all, active, completed)
- Todo categories/tags
- User profile management
IMPORTANT: Do NOT implement any actual backend or API calls. Instead, for every place where I would need an API call, leave detailed comments that specify:
- The exact API endpoint URL and HTTP method
- Request headers needed
- Request body structure with types
- Expected response structure with status codes
- Error response formats
Make the UI fully functional with mock data so I can interact with it, but ensure every backend interaction point is clearly documented with the API specifications above.
Step 1.2: Finalize Frontend Specifications
Complete the frontend with this final prompt:
Let's do a final review and enhancement:
1. Go through every API comment and ensure they include:
- Authentication requirements (JWT tokens, headers)
- Rate limiting considerations
- Pagination for list endpoints
- Input validation requirements
- Specific error codes and messages
2. Add any missing edge cases in the UI:
- Empty states (no todos, no search results)
- Network error handling
- Offline functionality considerations
- Loading states for all async operations
3. Create a summary document that lists every API endpoint needed, organized by feature area.
The goal is a thoroughly specified frontend that enables backend developers to implement the exact API without additional questions.
Part 2: Backend Planning with Raindrop MCP
Now comes the magic - Claude will analyze your frontend and automatically create a comprehensive PRD.
Step 2.1: Start the Raindrop MCP Workflow
Use this prompt to start the Raindrop MCP workflow:
Perfect! Now I want to use the Raindrop MCP to build the backend for this frontend.
Please call the liquidmetal-staging:login MCP tool to start a new application development session, then continue with the flow. When asked for the PRD, use the frontend we just created as input - analyze all the API comments and specifications to create a comprehensive Product Requirements Document that captures exactly what the backend needs to support this frontend.
Step 2.2: What Happens During PRD Generation
Claude will act as an expert product manager, analyzing your frontend code and asking clarifying questions like:
“I see you need user authentication. Should this support social login providers?”
“Your todo categories - should users be able to create custom categories or use predefined ones?”
“For user profiles, what information should be editable vs read-only?”
“Should todo filtering be client-side or server-side for better performance?”
This ensures the PRD captures not just what’s obvious from your frontend, but also the underlying business logic and edge cases.
Part 3: Backend Implementation
Once the PRD is approved, the Raindrop MCP workflow automatically handles the complete backend implementation.
Step 3.1: Automated Backend Development
Continue with this prompt:
Excellent! The PRD looks comprehensive. Please continue with the Raindrop MCP workflow to implement the complete backend infrastructure. Make sure the API responses match exactly what the frontend expects based on the comments and specifications.
The workflow will automatically:
Design database schemas based on your frontend data requirements
Generate API endpoints with the exact request/response formats you specified
Set up authentication matching your frontend login flows
Deploy everything to live URLs
Part 4: Frontend Integration
Finally, we’ll connect your frontend to the real backend.
Step 4.1: Update Frontend to Use Real APIs
Once the backend is deployed, use this prompt:
Now that the backend is deployed and running, let's update the frontend to use the real API endpoints instead of the mock data and comments.
Please:
1. Replace all the API placeholder comments with actual fetch calls to the deployed endpoints
2. Update the API URLs to use the real deployed URLs from the Raindrop application
3. Add proper error handling for network requests
4. Implement the authentication flow using the real JWT tokens
5. Test all functionality end-to-end
Make sure to preserve all the UI functionality while connecting it to the live backend.
Step 4.2: Test Your Application
Now you can test your fully integrated application! Open the frontend in your browser and verify that everything works as expected. The Raindrop MCP workflow has already tested all the API endpoints during deployment, so you can focus on using your application and ensuring the user experience matches your vision.
Key Benefits
The frontend-first approach with Claude Code + Raindrop MCP saves you from writing PRDs yourself since Claude does all the work of analyzing your frontend and extracting comprehensive specifications. It also ensures you have fully specified APIs because your mock frontend captures every endpoint, request format, response structure, and edge case before any backend development begins - eliminating ambiguity and integration issues.
Next Steps
Once you’ve completed this tutorial, you can apply the same pattern to build any type of application:
E-commerce sites
: Build the shopping cart and checkout flow first
Social applications
: Create the user profiles and posting interface first
Dashboard applications
: Design all the charts and data views first
AI applications
: Mock the AI interactions and responses first
The frontend-first approach with Claude Code + Raindrop MCP works for any application where you can envision the user interface before the backend complexity.
Try It Yourself
Start your own frontend-first project by describing your application idea to Claude Code and following this same four-phase pattern. The more detailed your frontend specifications, the better your automatically generated PRD will be.
Previous
Building a CRUD API with Claude Code + Raindrop MCP
Next
Build an AI-Powered Photo App with Figma Make + Raindrop

Build an AI-Powered Photo App with Figma Make + Raindrop
URL: https://docs.liquidmetal.ai/tutorials/figma-make-tutorial/
Build an AI-Powered Photo App with Figma Make + Raindrop
Build an AI-powered photo application using two AI development tools: Figma Make for rapid frontend development and Raindrop for backend infrastructure. This tutorial shows you how to create a photo sharing app where users can upload pictures and search them using natural language powered by
SmartBuckets
.
This approach lets you design visually, generate production-ready code, and deploy a complete backend.
Prerequisites
Before starting this tutorial, make sure you have:
A
Figma Make
account
Completed the
Claude Code + Raindrop MCP Setup
to install Raindrop CLI and configure your AI coding assistant
The Development Flow
This tutorial follows a five-phase approach:
Visual Design
: Create the AI-powered photo app interface in Figma Make
Frontend Deployment
: Deploy your application directly from Figma Make
API Specification
: Generate OpenAPI spec from your design
Backend Implementation
: Use Raindrop MCP to build the smart backend with
SmartBuckets
Integration
: Connect deployed frontend to backend and test photo upload and search
Part 1: Visual Design with Figma Make
We’ll start by building the frontend using Figma Make to create the photo app interface.
Step 1.1: Create Your Figma Make Project
Go to
Figma Make
In the chat interface, paste this detailed prompt to design your app:
AI Photo App Layout
Header Section
- App title "AI Photos" with a camera/photo icon
- Smart search bar with placeholder "Search photos: 'kids at beach', 'birthday party', 'Christmas 2023'..."
- User avatar with photo stats (total photos, recent uploads)
- Upload button (prominent, easy to find)
Main Content Area (Dual Layout)
Photo Library Panel (Left/Main Area)
- Photo grid/masonry layout with:
* Thumbnail images with hover effects
* Upload date overlay
* Selection checkboxes for batch operations
* Lightbox view on click
- Upload zone (drag & drop area) when empty or at top
- Sorting options (date, name, relevance)
- View toggle (grid, list, timeline)
Smart Search & Filters (Right Sidebar)
- Natural language search input with examples:
* "Show me photos from last summer"
* "Find pictures with grandma"
* "Christmas photos from 2022"
* "Kids playing in the park"
- Search results with highlighting and relevance scores
- Quick filters:
* Date ranges (This week, Last month, This year)
* People detected in photos
* Locations/events
* Photo types (portraits, landscapes, group photos)
- Search history dropdown
- Recent searches suggestions
Components Needed
- Photo card/thumbnail component
- Lightbox/modal for full-size viewing
- Upload component with drag & drop
- Search result cards with snippets
- Filter chips and date pickers
- Loading states for uploads and searches
- Empty states for no photos/no results
- Progress indicators for upload
Design Style
- Clean, photo-focused interface with white/light backgrounds
- Consistent color scheme (primary: warm blue, accent: soft green)
- Responsive design optimized for photo viewing
- Smooth animations for photo loading and transitions
- Mobile-first approach for easy photo sharing
- Accessibility features for all users
Step 1.2: Refine the Design
After Figma Make generates your initial design, continue the conversation in the chat interface to refine as needed. You might want to add features like photo albums, sharing capabilities, or enhanced mobile photo viewing. Make sure all interactive elements are clearly defined and the data flow between components is logical.
Part 2: Frontend Deployment
Once you’re happy with your design, click the “Publish” button in the top right corner of Figma Make. Your photo app will be deployed and live at the provided URL with mock data and placeholder functionality.
Part 3: API Specification Generation
In Figma Make’s chat interface, ask it to create an OpenAPI spec YAML file that includes all required API endpoints to make this app function. Once generated, you can find the YAML file in the “Code” tab in the top middle of the screen - look for something like
photo-app-api-spec.yml
. Copy the entire content of that file for use in the next step.
Part 4: Backend Implementation with Raindrop
Now we’ll use your AI coding assistant with Raindrop MCP to build the backend with
SmartBuckets
for photo storage and search.
Raindrop automatically continues through the development workflow, only pausing when it needs user input for approvals like the Product Requirements Document (PRD) review and code structure confirmation.
Step 4.1: Start the Raindrop Workflow
Open your AI coding assistant (Claude Code) and use the
/new-raindrop-app
command to start a new Raindrop app development cycle. When the AI coding assistant asks what you want to build, paste this prompt:
I want to build an AI-powered photo application backend using Raindrop. Here's my OpenAPI specification:
[Paste your api-spec.yaml content here]
The key requirements are:
- Store photos in [SmartBuckets](/concepts/smartbuckets) for content storage
- Enable natural language search of photos using [SmartBucket](/concepts/smartbuckets) search capabilities
- Users should be able to ask questions like:
- "Find photos from Christmas 2023"
- "Show me pictures with the kids at the beach"
- "Find group photos from birthday parties"
Step 4.2: PRD Development Process
Your AI coding assistant will analyze your API spec and ask clarifying questions about the photo app business logic. Answer questions as needed, the more info you can provide the better the PRD will be.
The PRD that Raindrop creates will be detailed and contain specifications that the coding assistant needs to implement your app correctly. It’s important that you carefully review the business logic before accepting it. Once you’ve reviewed the PRD, simply say “Approved” and your AI coding assistant will continue with the code step in the Raindrop development workflow. For details on the complete workflow, see the
Claude Code + Raindrop MCP
guide.
Step 4.3: Code Structure Review
In the code step, your AI coding assistant will create all the required files and add detailed comments in each file explaining what needs to be implemented. These comments guide the sub-agents that will build the actual code to ensure they implement the correct functionality.
The AI coding assistant will ask for your approval before proceeding. As the user, you should review all the generated files and verify that the business logic documented in the comments is correct. Once you’re satisfied with the code structure and comments, approve the next step where the AI coding assistant will build, deploy, test, improve, and finally deliver your API.
It might take a few loops for your coding assistant and the Raindrop MCP to build and resolve all bugs and get to a working backend. This is completely normal.
Part 5: Integration and Testing
Now we’ll connect your Figma Make frontend to the deployed backend.
Step 5.1: Get Updated API Specification and Connect Frontend
First ask your
AI coding assistant
to generate an updated OpenAPI specification:
In your AI coding assistant (Claude Code):
Please generate an updated OpenAPI specification that reflects the actual API endpoints that were built and deployed. This will ensure I have the correct API documentation for frontend integration.
Copy the updated OpenAPI specification, then switch back to
Figma Make’s chat interface
to connect your frontend:
In Figma Make’s chat interface:
Now I need to update my deployed frontend to connect to the real backend.
Here's my deployed backend URL: [your-raindrop-backend-url]
Here's the updated OpenAPI spec: [paste the updated spec]
Please help me:
1. Update the deployed frontend to replace all mock data and placeholder API calls with real endpoints
2. Add proper error handling and loading states for uploads and searches
3. Set up authentication flow for user access
4. Test photo upload and natural language search end-to-end
Make sure to preserve all the UI functionality while connecting to the live SmartBucket-powered backend.
Note
If you don’t have your backend URL, you can get it by running
raindrop build find
inside your Raindrop project or asking your AI coding assistant to run the command for you.
Conclusion
You’ve now built a complete AI-powered photo application using visual design tools and automated backend generation. Your app allows users to upload photos and search them using natural language queries powered by
SmartBuckets
.
Test your application by uploading photos and trying searches like “Show me beach photos” or “Find pictures with grandparents” to see how the semantic search understands content rather than just filenames.
This workflow demonstrates how modern AI development tools can take you from visual design to deployed application without traditional coding workflows.
Previous
Frontend-First Development with Claude Code + Raindrop MCP
Next
Netlify LiquidMetal Integration

Netlify LiquidMetal Integration
URL: https://docs.liquidmetal.ai/tutorials/netlify-integration/
Netlify LiquidMetal Integration
The LiquidMetal extension brings SmartBucket, SmartSQL, and SmartMemory to your Netlify projects. With these resources, you can build AI agents that remember conversations, search through documents semantically, and query databases with natural language. The extension provisions all resources and configures environment variables automatically, so you can start building immediately.
Prerequisites
Active Netlify account with at least one project
LiquidMetal account (create one at
liquidmetal.run
)
Step 1: Install the Extension
Install the LiquidMetal extension in your Netlify account:
Log in to your Netlify dashboard
Click
Extensions
in the left sidebar
Search for “LiquidMetal” in the extension marketplace
Click
Install
on the LiquidMetal extension
Note
The extension installs at the account level but provisions resources per project.
Step 2: Create a LiquidMetal API Key
Generate an API key to connect Netlify with your LiquidMetal account:
Log in to
liquidmetal.run
Click
Settings
at the bottom of the left sidebar
Navigate to the
API Keys
tab
Click
Create New Key
Enter a descriptive name (e.g., “Netlify Integration”)
Set audience to
All SmartBuckets
Copy the generated API key
Save Your API Key
Store the API key securely. You cannot view it again after closing the dialog.
Step 3: Configure the Extension
Connect your LiquidMetal account to your Netlify project:
Select your project in Netlify
Click
Extensions
in the left sidebar
Find
LiquidMetal
under installed extensions
Click
Settings
Paste your API key in the
API Key
field
Click
Save
Step 4: Provision Resources
Create your LiquidMetal resources:
Leave the
Application Name
field empty to use default values
Click
Provision LiquidMetal Resources
Wait for provisioning to complete (typically 30-60 seconds)
The extension creates three resources:
SmartBucket
- AI-powered object storage with semantic search
SmartSQL
- Intelligent relational database with natural language queries
SmartMemory
- Stateful memory for AI agents and workflows
All environment variables are added to your Netlify project automatically.
Step 5: Use LiquidMetal in Your Project
Access your provisioned resources using the LiquidMetal SDK in your serverless functions.
Install the SDK
Add the SDK to your project:
Terminal window
npm
install
@liquidmetal-ai/lm-raindrop
Environment Variables
The extension configures these environment variables automatically:
RAINDROP_APPLICATION_NAME
- Your application identifier
RAINDROP_APPLICATION_VERSION
- Application version identifier
RAINDROP_SMARTBUCKET_NAME
- Your SmartBucket name
RAINDROP_SMARTMEMORY_NAME
- SmartMemory instance name
RAINDROP_SMARTSQL_NAME
- SmartSQL instance name
RAINDROP_API_KEY
- Your API key for authentication
Example: Search Documents in SmartBucket
Create a serverless function that searches documents in your SmartBucket:
netlify/functions/search-docs.ts
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
export
async
function
handler
(
event
)
{
// Initialize the Raindrop client with your API key
const
client
=
new
Raindrop
(
{
apiKey:
process
.
env
.
RAINDROP_API_KEY
,
}
);
// Extract search query from request body
const {
query
} =
JSON
.
parse
(event
.
body
);
// Perform semantic search across your SmartBucket
const
response
= await
client
.
query
.
chunkSearch
(
{
bucketLocations:
[
{ bucket: { name: process
.
env
.
RAINDROP_SMARTBUCKET_NAME
} }
]
,
input:
query
,
requestId:
`
search-
${
Date
.
now
()
}
`
,
// Unique ID for tracking this search
}
);
return
{
statusCode:
200
,
body:
JSON
.
stringify
(response
.
results
)
,
};
}
Example: Store Conversation State
Store conversation context using SmartMemory:
netlify/functions/chat.ts
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
export
async
function
handler
(
event
)
{
// Initialize the Raindrop client with your API key
const
client
=
new
Raindrop
(
{
apiKey:
process
.
env
.
RAINDROP_API_KEY
,
}
);
// Extract message content and session ID from request
const {
message
,
sessionId
} =
JSON
.
parse
(event
.
body
);
// Store the message in SmartMemory for this session
const
putMemory
= await
client
.
putMemory
.
create
(
{
content:
message
,
sessionId:
sessionId
,
smartMemoryLocation: {
smart_memory: {
name:
process
.
env
.
RAINDROP_SMARTMEMORY_NAME
,
application_name:
process
.
env
.
RAINDROP_APPLICATION_NAME
,
version:
process
.
env
.
RAINDROP_APPLICATION_VERSION
,
}
,
}
,
}
);
// Return the unique memory ID for this stored message
return
{
statusCode:
200
,
body:
JSON
.
stringify
({ memoryId: putMemory
.
memoryId
})
,
};
}
Next Steps
Explore the full capabilities of your LiquidMetal resources:
SDK Overview
- Complete SDK reference and documentation
SmartBucket Documentation
- Object storage with AI search
SmartMemory Reference
- Stateful AI memory
SmartSQL Guide - Intelligent database queries (SDK docs coming soon)
Previous
Build an AI-Powered Photo App with Figma Make + Raindrop
Next
Actors

Actors
URL: https://docs.liquidmetal.ai/concepts/actors/
Actors
Ready to implement actors?
Check out the
Actor reference documentation
for detailed API information, code examples, and implementation guidance.
What Are Actors?
Actors are stateful compute units that maintain persistent data and handle requests with unique identity. Each actor instance exists for a specific entity like a user session, shopping cart, or collaborative document.
Traditional serverless functions rebuild context from databases on every request. This causes performance overhead for stateful operations like:
Shopping carts that track items across page loads
Collaborative documents with real-time editing
Game sessions that maintain complex state over time
Actors solve this by keeping state in memory. When requests arrive, they route to the correct actor by ID. That actor already has the full context loaded and ready.
Core Concepts
Identity-Based Compute Units
Every actor has a unique
ActorId
that persists across requests, deployments, and system restarts. You can create deterministic IDs from names (
actorNamespace.idFromName('user-123')
) or generate unique ones for new entities. Each actor maintains both persistent state through
ActorStorage
and computational context through in-memory processing. A shopping cart actor stores selected items in durable storage while maintaining complex purchase workflow logic in active memory.
Isolated State and Execution Boundaries
Each actor runs as a completely isolated instance with its own computational environment and storage namespace. The
ActorState
interface provides controlled access to persistence operations while preventing cross-actor interference. This isolation guarantees that user “123“‘s shopping cart cannot access user “456“‘s data, even if both use the same actor class. Race conditions are eliminated within each actor through single-threaded execution.
Deterministic Request Routing
Actor requests route to specific instances based on unique identifiers. A request for
actorNamespace.get(userActorId)
always reaches the same actor instance, creating a persistent computational endpoint. This deterministic routing enables actors to accumulate context, maintain workflow state, and build complex behaviors over time rather than starting fresh on every invocation.
Alarm-Based Scheduling and Lifecycle Management
Actors can schedule future executions using
state.storage.setAlarm()
, enabling time-based operations like session expiration, periodic cleanup, or workflow advancement. The alarm system survives system restarts and redeployments, providing reliable scheduling. Actors can also control their own lifecycle through
blockConcurrencyWhile()
for initialization and
deleteAll()
for cleanup, giving fine-grained control over resource management.
How It Works
Lazy Instantiation and Routing
When you call
actorNamespace.get(userActorId).someMethod()
, the system performs lazy instantiation. If no actor exists for that ID, it creates a new instance using your actor class constructor, passing
ActorState
and environment bindings. If the actor exists, requests route directly to the running instance with all state and context intact. This lazy approach optimizes resource usage - actors only exist when needed.
Strong Consistency and Single-Threaded Execution
Each actor instance guarantees strong consistency through single-threaded execution. All methods on a single actor execute sequentially, eliminating race conditions within that actor’s scope. You can perform complex multi-step operations on actor state without concurrency concerns. However, communication between different actors requires explicit coordination since they operate independently.
Integrated Storage and Compute Co-location
Actor storage (
state.storage
) provides transactional persistence directly integrated with the compute instance. You can store JavaScript objects with
put()
, retrieve them with
get()
, and implement custom indexing with
list()
operations. Storage operations are atomic within each actor and optimized for low latency since storage co-locates with the compute. This eliminates the network round-trips typical in traditional database-backed applications.
Durable Alarm System and Time-Based Operations
The alarm system (
setAlarm()
,
getAlarm()
,
deleteAlarm()
) provides reliable time-based scheduling that survives system restarts, redeployments, and infrastructure maintenance. An actor can schedule itself to execute at specific Unix timestamps for session cleanup, workflow advancement, or periodic processing. When the alarm fires, the actor receives an alarm event that can trigger complex business logic while maintaining full access to its persistent state.
Concurrency Control and Lifecycle Management
Actors provide fine-grained concurrency control through
blockConcurrencyWhile()
for critical initialization sequences and
waitUntil()
for background operation coordination. The
deleteAll()
operation enables controlled actor cleanup and resource reclamation. These primitives let you implement sophisticated lifecycle management while maintaining the strong consistency guarantees that make actors powerful for stateful computation.
Trade-offs and Considerations
Single-Actor Consistency vs Multi-Actor Coordination
Actors guarantee strong consistency within a single instance through single-threaded execution, but coordinating operations across multiple actors requires careful design. If your application needs atomic updates across user accounts, you’ll need external coordination mechanisms like
Queues
for event propagation or
Services
for orchestration. Direct inter-actor communication creates tight coupling that undermines the isolation benefits.
Resource Overhead vs Performance Optimization
Each actor instance maintains persistent resources and consumes memory even when idle. Co-located storage provides excellent latency but costs more than shared database resources. For frequently-accessed entities with complex state (user sessions, game lobbies, collaborative documents), this overhead delivers significant performance benefits. For rarely-accessed entities, consider using
Services
with
SQL databases
for more cost-effective storage.
Horizontal Scaling vs Per-Entity Throughput
Since all requests for a particular
ActorId
route to the same instance, each actor has finite throughput limits. High-frequency operations on popular entities can bottleneck at the single-actor level. However, the actor model scales horizontally - you can have millions of different actors, each handling moderate request volumes. Design your actor boundaries to balance throughput needs with state consistency requirements.
State Management vs Data Architecture
Actors excel at maintaining working state, temporal data, and computational context, but they’re not primary data repositories. Use actors for active sessions, workflow state, and cached computations while storing historical data in
SQL databases
or
SmartBuckets
. The alarm system enables automatic state transitions between hot actor storage and cold persistent storage.
Cold Start Latency vs Resource Efficiency
Inactive actors may be evicted from memory, causing cold start delays when accessed again. The actor constructor runs on first access after eviction, potentially loading state from storage. For latency-critical applications, consider implementing keep-alive patterns through periodic alarm-based activity. For resource efficiency, accept cold start latency as a reasonable trade-off for idle resource reclamation.
Geographic Distribution and Jurisdiction Control
Actors support geographic placement through
locationHint
options and regulatory compliance through jurisdiction controls (
eu
,
fedramp
). This enables data locality optimization and compliance requirements but adds complexity around cross-region coordination. Plan actor placement based on your users’ geographic distribution and regulatory requirements.
Connections
Actors fit naturally into event-driven architectures. They can subscribe to queues, respond to storage events, and trigger observers based on state changes. This makes them powerful coordination points for complex workflows that span multiple system components.
The relationship with services is complementary - services handle public API endpoints and route authenticated requests to appropriate actors. Services provide the stateless, scalable front door while actors maintain the stateful, persistent backend logic.
Database integration follows a specific pattern: actors maintain hot, working state while databases store cold, historical data. A shopping cart actor might keep the current items in memory while persisting completed orders to SQL. This division lets you optimize for both real-time performance and long-term data management.
Actors also connect naturally with SmartMemory for AI applications. An AI agent can use an actor to maintain conversation state and working memory while leveraging SmartMemory for long-term learning and knowledge retention. The actor provides the active intelligence while SmartMemory provides the accumulated wisdom.
Previous
Netlify LiquidMetal Integration
Next
AI Models

AI Models
URL: https://docs.liquidmetal.ai/concepts/ai-models/
AI Models
Ready to implement AI capabilities?
Check out the
AI Models reference documentation
for detailed API information, available models, and implementation examples.
What Are AI Models?
AI models add intelligence to applications. Traditional software processes data according to rigid rules. AI models understand, analyze, and create content.
An uploaded image becomes “a golden retriever playing in a park” instead of just pixels. A customer support request becomes an opportunity for personalized assistance based on the user’s emotional state and specific needs.
AI models work with text, images, audio, and video. Modern AI infrastructure makes these capabilities as easy to integrate as database queries. You don’t need to understand transformer architectures or GPU clusters. You need to know which model to use for which task and how to integrate it into your application.
Core Concepts
Unified Access Pattern
Every AI model in Raindrop uses the same interface:
env.AI.run()
. Whether you’re generating text with
deepseek-r1
, analyzing images with
llava-1.5-7b
, transcribing audio with
whisper-large-v3-turbo
, or creating embeddings with
bge-large-en
, the pattern remains consistent. This unified approach lets you swap models, experiment with different capabilities, and compose multiple AI operations without learning provider-specific APIs.
Provider Abstraction and Model Router
Raindrop’s model router provides a unified interface that abstracts away provider complexity. Models can be hosted on integrated platform infrastructure (
llama-3.1-8b-instruct
) or external providers (
deepseek-r1
,
llama-3.3-70b
). The router handles authentication, routing, and response formatting automatically. This means
llama-3.3-70b
works identically whether it runs on platform infrastructure or external providers.
Capability-Based Model Selection
Models are organized by capabilities rather than providers:
chat
models for conversations,
vision
models for image understanding,
embeddings
models for semantic search,
audio
models for speech processing. A model like
llama-4-scout-17b
supports both
chat
and
vision
, while
whisper-large-v3
focuses purely on
audio
transcription. This capability mapping helps you choose the right intelligence for each task.
Type Safety and Schema Validation
Each model defines precise input and output types through TypeScript interfaces. Text models expect
messages
arrays with role-based conversation structure. Vision models accept image data alongside text prompts. Embedding models process raw text and return numerical vectors. This type safety prevents integration errors and makes model capabilities explicit in your code.
Composable Intelligence Workflows
Real intelligence emerges from combining models. A customer service system might use
whisper-large-v3
for speech recognition,
deepseek-r1
for complex reasoning about the customer’s issue,
bge-large-en
for retrieving relevant knowledge, and text generation to craft empathetic responses. Each model contributes specialized understanding to create sophisticated AI behaviors.
How It Works
Request Routing Architecture
When you call
env.AI.run('deepseek-r1', inputs)
, the system first consults the model catalog to determine routing. Models like
llama-3.1-8b-instruct
route to integrated platform infrastructure, while
deepseek-r1
routes through external providers. The model router handles authentication, request formatting, and response processing automatically. This abstraction means you write the same code regardless of where the model actually runs.
Input Transformation and Validation
Different model types require different input structures. Chat models expect OpenAI-compatible message arrays with role, content, and optional image attachments. Embedding models process raw text strings or arrays. Audio models handle file uploads with optional language hints. The system validates inputs against model schemas before transmission, catching type mismatches early in development.
Intelligent Load Balancing and Fallbacks
The model router implements probabilistic routing for external models, distributing load across multiple providers when available. If a preferred provider is unavailable, requests automatically fall back to alternative implementations. For platform models, the system leverages built-in geographic distribution and auto-scaling to handle demand spikes.
Response Processing and Type Casting
Responses undergo automatic processing based on model type. Chat models return structured completions with usage metadata. Embedding models return numerical vectors with dimensional information. Audio models provide transcriptions with confidence scores. The system maintains type safety throughout, ensuring your TypeScript code receives properly typed responses.
Streaming and Async Processing
Models support real-time streaming for conversational experiences (
stream: true
) and async batch processing for high-throughput scenarios (
queueRequest: true
). Streaming enables token-by-token response delivery for chat interfaces. Batch processing queues requests for efficient bulk operations. The unified interface handles both patterns seamlessly.
Trade-offs and Considerations
Performance vs Resource Usage
Model size directly impacts both capability and resource consumption.
deepseek-r1
(671B parameters) provides state-of-the-art reasoning but consumes significant compute resources.
llama-3.1-8b-instruct
offers excellent performance per cost for most tasks.
gemma-2b
provides basic capabilities with minimal overhead. Choose based on your performance requirements and budget constraints.
Context Length vs Processing Speed
Models offer different context windows that affect both capability and latency.
llama-4-scout-17b
supports 128K tokens for analyzing entire documents, while
llama-3.2-3b-instruct
handles 8K tokens for faster conversational responses.
bge-m3
embeddings support 8K input tokens compared to
bge-small-en
’s 512-token limit. Longer contexts enable richer understanding but increase processing time and costs.
Specialized vs General Intelligence
Specialized models excel in focused domains.
deepseek-math-7b
outperforms general models on mathematical reasoning.
qwen-coder-32b
generates better code than general chat models.
whisper-large-v3
transcribes speech more accurately than multimodal models. However, specialized models cannot handle tasks outside their training domain, requiring multiple models for comprehensive applications.
Provider Diversity vs Simplicity
Using multiple providers through the model router provides redundancy and access to cutting-edge models like
kimi-k2
or
deepseek-r1
. However, this creates dependencies on external services with varying reliability, pricing, and geographic availability. Platform-hosted models like
llama-3.1-70b-instruct
offer predictable performance but may not match the latest external models.
Streaming vs Batch Processing
Real-time streaming (
stream: true
) enables responsive user experiences but requires persistent connections and careful error handling. Batch processing (
queueRequest: true
) optimizes throughput for bulk operations but adds complexity around result retrieval and status monitoring. Choose based on your user experience requirements.
Data Locality and Privacy
Platform-hosted models process data within the integrated platform infrastructure with geographic data residence. External providers may process data across different jurisdictions with varying privacy policies. For sensitive applications, consider using platform models exclusively or implementing additional data encryption for external provider calls.
Connections
Storage System Integration
AI models and storage systems create powerful data processing pipelines.
SmartBuckets
automatically process uploaded documents using embedding models like
bge-large-en
, enabling semantic search across your content.
Vector indexes
store embeddings from models for fast similarity search. Regular
buckets
store processed audio files and other AI-generated assets. The intelligence layer transforms raw storage into searchable, analyzable insights.
Queue-Driven AI Workflows
Queues
enable asynchronous AI processing at scale. Upload events trigger document analysis jobs that use
llama-4-scout-17b
for vision understanding or
whisper-large-v3
for audio transcription.
Observers
monitor completion events to chain AI operations - document analysis triggers summary generation, which triggers email notifications. This decoupled architecture handles AI workloads efficiently without blocking user interactions.
Database-Backed Intelligence
SQL databases
store structured data while AI models extract semantic meaning. A customer support ticket lives in SQL while
deepseek-r1
generates sentiment analysis, category classification, and response suggestions stored in separate columns.
SmartSQL
can automatically run AI analysis on database changes, keeping insights synchronized with your core data.
Stateful AI through Actors
Actors
enable persistent AI behavior across interactions. A conversation actor maintains dialog state while calling
llama-3.3-70b
for each response, preserving context that traditional stateless AI calls lose.
SmartMemory
actors store episodic, semantic, and procedural memories, creating AI agents that learn and adapt over time through accumulated interactions.
Service Orchestration Patterns
Services
coordinate complex AI workflows, handling input validation, model selection, and response formatting. A document analysis service might use
llama-4-scout-17b
for visual understanding,
bge-large-en
for text embeddings, and
deepseek-math-7b
for quantitative analysis, presenting unified results to clients. Services abstract AI complexity while providing reliable, scalable endpoints.
Multi-Modal AI Pipelines
Real applications compose multiple AI capabilities. A customer service system uses
whisper-large-v3-turbo
for speech transcription,
bge-large-en
for knowledge retrieval from documentation,
deepseek-r1
for reasoning about complex issues, and text-to-speech for audio responses. Each model contributes specialized intelligence while the overall system delivers sophisticated, human-like assistance.
Previous
Actors
Next
Annotations

Annotations
URL: https://docs.liquidmetal.ai/concepts/annotations/
Annotations
Ready to implement annotations?
Check out the
Annotations reference documentation
for detailed API information and implementation examples.
Opening Context
Where should configuration live? Most applications scatter metadata across dozens of places: environment variables, configuration files, database tables, external configuration services, documentation wikis, deployment scripts. This fragmentation creates a persistent problem - when you need to understand how a system is configured, you have to check multiple sources, often with inconsistent or outdated information.
Consider deploying a feature flag change. You might update an environment variable, modify a configuration file, update documentation, and notify your team through multiple channels. If something goes wrong, you need to reverse all these changes across different systems. What if there was a single source of truth that kept all these pieces together?
Annotations solve this by creating a metadata layer that stays connected to your application’s logical structure. Instead of managing configuration separately from your code, annotations let you attach metadata directly to the entities that need it - applications, modules, components, or individual features. This creates a cohesive view where operational knowledge stays connected to the systems it describes.
Core Concepts
Machine-Readable Names (MRNs)
Every annotation has a precise, hierarchical address that identifies exactly what it describes. An address like
app/myapp/v1.2.0/auth-service/rate-limits/premium-users
immediately tells you this metadata applies to rate limiting configuration for premium users in the auth service of myapp version 1.2.0. This precision eliminates ambiguity about what each piece of metadata describes.
Hierarchical Organization
Metadata naturally follows your application’s structure. Application-level settings apply broadly, while component-specific configuration affects only relevant parts. This hierarchy means you can set global defaults at the application level and override them for specific modules or components as needed.
Versioned State Management
Every change to annotations creates a new revision with complete history. This isn’t just about rollback capabilities - it’s about understanding how your system configuration evolved over time. You can see when certain decisions were made, why they were changed, and trace configuration issues back to specific changes.
Flexible Content Types
Annotations store any type of metadata: structured JSON for configuration, plain text for documentation, binary data for certificates, or complex objects for behavioral specifications. The type system ensures you get back the same type of data you stored, with proper validation and schema enforcement where needed.
How It Works
Annotation storage follows a path-based addressing system where each level of the hierarchy represents a more specific scope. When you create an annotation, you specify its complete path through the application structure. The system automatically manages the hierarchical relationships and provides efficient access patterns for different scopes.
Revision management happens automatically. Every modification creates a new revision while preserving the complete history. This includes not just the data changes, but metadata about when the change was made, what triggered it, and how it relates to previous versions. The system can efficiently store and retrieve any historical revision.
The retrieval system supports both specific path lookups and hierarchical queries. You can ask for the exact annotation at a specific path, or query for all annotations within a scope. The system understands inheritance patterns, so you can request effective configuration for a component and get the combination of global, module, and component-specific settings.
Access control and permissions integrate with the application’s security model. Different components and users can have different levels of access to various annotation scopes. This enables secure delegation where teams can manage configuration for their components without accessing system-wide settings.
Trade-offs and Considerations
Consistency vs Performance
Annotations prioritize consistency and correctness over raw performance. Reading annotations involves potential database queries and permission checks, making them unsuitable for high-frequency operations. They work best for configuration that changes infrequently and doesn’t need millisecond access times.
Schema Flexibility vs Validation
The flexible content model means annotations can store arbitrary data, but this flexibility can lead to inconsistencies if not managed carefully. Teams need to establish conventions about data structure and validation to prevent configuration drift and maintain system reliability.
Centralization vs Decentralization
While centralized metadata storage provides consistency, it can become a bottleneck for teams that need to manage their own configuration independently. The hierarchical permissions model helps, but organizations need to balance central governance with team autonomy.
Version Management Overhead
Complete revision history provides valuable audit trails but consumes storage and adds complexity to management operations. Long-running applications might accumulate substantial revision history that needs occasional cleanup or archival.
Scope Creep Risk
The flexibility of annotations can tempt teams to store operational data that belongs in other systems. Annotations work best for metadata and configuration, not for business data or high-volume operational information.
Connections
Annotations integrate naturally with the deployment pipeline, providing version-specific metadata that travels with your application code. This creates a coherent view where configuration changes are tracked alongside code changes, making it easier to understand how system behavior evolves.
The relationship with services enables runtime configuration that can change without redeployment. Services can check annotations at startup or periodically to adjust behavior based on operational requirements. This supports patterns like feature flags, rate limiting adjustments, or external service endpoints that need to change based on environment or operational conditions.
Actors can use annotations to store persistent behavioral configuration. Unlike actor state, which is runtime-specific and ephemeral, annotations provide persistent configuration that defines how actors should behave across restarts and deployments. This separation keeps operational concerns distinct from business logic.
Cross-component coordination becomes possible when multiple system elements reference the same annotation scopes. Service discovery, shared configuration, and integration points can all use annotations to maintain consistent understanding across different parts of your application architecture.
The connection to monitoring and observability tools provides rich context about configuration changes. When system behavior changes, you can correlate it with annotation modifications to understand whether operational changes contributed to performance or reliability issues.
Previous
AI Models
Next
Bucket Storage

Bucket Storage
URL: https://docs.liquidmetal.ai/concepts/bucket-storage/
Bucket Storage
Ready to implement bucket storage?
Check out the
Bucket Storage reference documentation
for detailed API information and implementation examples.
What Is Bucket Storage?
Applications need to handle files. Small projects save files to the local filesystem, but this approach fails with redundancy, global distribution, concurrent access, or scaling beyond a single server.
Files differ from database records. They’re often large, infrequently accessed, and served directly to users rather than processed by application logic. A user’s profile photo might be viewed thousands of times but updated rarely. A PDF report might be generated once and downloaded many times from different locations.
Bucket storage treats files as discrete objects identified by unique keys. Instead of hierarchical directories that might not reflect usage patterns, you design keys that match your application’s logic. A user’s profile photo might use key
users/12345/profile.jpg
, while a quarterly report uses
reports/2024/q3/summary.pdf
. The key becomes the addressing mechanism, and the storage system handles distribution, redundancy, and access optimization.
Core Concepts
Key-Based Addressing
Every object in bucket storage has a unique string key that serves as its address. Unlike filesystem paths, keys are arbitrary strings that encode organizational logic for your application. You might include user IDs, dates, content types, or processing stages to efficiently locate and manage your data.
Object Immutability Patterns
While bucket storage supports overwriting objects, many applications treat objects as immutable. Instead of updating
user/123/avatar.jpg
, you create
user/123/avatar-2024-03-15.jpg
and update a database record to point to the new version. This pattern provides natural versioning and simplifies caching strategies.
Content-Type Awareness
Bucket storage understands MIME types and HTTP semantics. When you store an image, you can specify its content type, and the storage system will serve it with appropriate headers. This enables direct serving to browsers, proper caching behavior, and integration with CDN systems.
Global Distribution Model
Objects replicate automatically across geographic regions for redundancy and performance. When a user requests a file, the system serves it from the closest available location without requiring application logic to manage this complexity.
How It Works
Object storage uses a simple put/get model. When you store an object, you specify its key, content, and optional metadata like content type and caching headers. The storage system handles the actual placement, replication, and indexing automatically.
Retrieval happens through direct HTTP URLs or application code. For public content like images or documents, you generate URLs that browsers access directly. For private content, your application controls access and streams data through your services with authentication and authorization.
The addressing system is flat with no directories or hierarchical structures to manage. Keys that look like paths (
users/123/documents/contract.pdf
) are strings containing slash characters. You can reorganize your logical structure by changing key patterns without moving actual data.
Metadata handling is built into the storage system. Beyond content type, you can attach custom metadata to objects - creation dates, processing status, owner information, or any other key-value pairs that help your application manage the content lifecycle.
Trade-offs and Considerations
Eventual Consistency
Bucket storage prioritizes availability and partition tolerance over immediate consistency. When you store an object, it may take moments to propagate to all regions. This is usually invisible to users, but applications must account for the possibility that a just-uploaded file might not be immediately available everywhere.
Key Design Impact
Key structure has long-term implications for organization and performance. Keys that start with timestamps create hotspots as all new content goes to the same storage partitions. Keys that include user IDs distribute better but make it harder to query for related content. Consider your access patterns when designing key schemas.
Storage Costs vs Retrieval Costs
Different storage classes optimize for different usage patterns. Frequently accessed content should use standard storage, while archival content can use cheaper storage classes with higher retrieval costs. Applications must match storage strategy with actual usage patterns.
Direct Access vs Controlled Access
Generating direct HTTP URLs for objects enables efficient content delivery but bypasses application-level access controls. You need to decide whether objects are public, private, or require dynamic authorization. This choice affects both security and performance characteristics.
Size and Processing Limitations
While bucket storage handles objects from bytes to gigabytes, very large files might need special handling for upload and processing. Applications might need to support chunked uploads, resumable transfers, or background processing workflows for large content.
Connections
Bucket storage integrates seamlessly with services for upload and download workflows. Services handle user authentication, validate file types and sizes, generate appropriate access URLs, and coordinate with other system components. The stateless nature of services matches well with the stateless nature of object storage.
The relationship with observers enables powerful processing pipelines. When objects are uploaded to buckets, observers can automatically trigger image resizing, document processing, virus scanning, or content analysis without requiring synchronous processing during upload.
Database integration typically involves storing object keys and metadata in SQL while keeping the actual file content in buckets. A blog post record might include a
featured_image_key
column that references an object in bucket storage. This separation optimizes each system for what it does best.
CDN and edge delivery work naturally with bucket storage. Objects can be cached at edge locations worldwide, reducing latency for global users. The HTTP-native design means standard web caching strategies apply directly to stored objects.
For AI-enhanced applications, bucket storage often feeds into SmartBuckets for content analysis and search capabilities. You might store original files in standard buckets for efficient serving while processing them through SmartBuckets for semantic search and intelligent organization.
Previous
Annotations
Next
Claude Code + Raindrop MCP

Claude Code + Raindrop MCP
URL: https://docs.liquidmetal.ai/concepts/claude-code-raindrop-mcp/
Claude Code + Raindrop MCP
Claude Code + Raindrop MCP transforms AI-assisted development from writing code snippets to building complete applications with infrastructure. Instead of just getting help with coding, you get an automated system that takes you from idea to deployed application.
Ready to start building?
Set up in seconds with one command:
raindrop mcp install-claude
Then check out the
Claude Code + Raindrop MCP Setup
for the complete guide.
What It Is
The Raindrop MCP (Model Context Protocol) server is a specialized integration that extends Claude Code’s capabilities. When connected, Claude Code becomes an application development platform that can:
Build
CRUD APIs
with complete database integration and authentication
Create
multiagent systems
with coordinated AI agents and shared state
Develop
AI-infused applications
with language models, embeddings, and vector search
Provision real cloud infrastructure automatically
Deploy working applications to live URLs
Manage the entire development lifecycle from requirements to production
How It Works
Guided Automation
The MCP server provides Claude Code with structured workflows that ensure nothing gets missed. Instead of ad-hoc conversations, you follow proven development phases that result in complete, working applications.
AI-Guided Planning
💡 Idea → 🎯 Init → 👥 Team → 📋 Requirements
↓
Automated
🏗️ Architecture → 🗄️ Database → 📚 Docs → 💻 Code → 🧪 Test → 🚀 Deploy
↓
Result
🌐 Live Application
Infrastructure Orchestration
Claude Code gains the ability to provision the complete Raindrop platform:
Services
- API endpoints with routing and business logic
Actors
- Stateful components with persistent data
Observers
- Event-driven automation and processing
Tasks
- Scheduled operations and cron jobs
SQL Databases
- Relational data with schemas and relationships
Vector Databases
- High-dimensional search for AI applications
KV Stores
- Key-value storage for configuration and caching
Bucket Storage
- Object storage for files and data
SmartBuckets
- AI-enhanced document processing and search
SmartMemory
- State management for AI agents
Queues
- Message queues for async processing
AI Models
- Language models, embeddings, and specialized AI services
Domain names and public URLs
- Live web access to your applications
State Management
The system maintains context across conversations and team members. You can pause development, switch projects, or collaborate with others while preserving all progress and decisions.
Quality Assurance
Built-in validation ensures each phase completes successfully before moving forward. Your applications are tested and verified to work correctly before deployment.
Three Ways to Interact
1. Build New Applications
Start from scratch and let the system guide you through the complete development process.
How it works:
Describe your application idea, answer questions about requirements, and approve the plan. Everything else is automated.
Result:
Complete application deployed to live infrastructure with databases, APIs, and public URLs.
2. Reattach to Existing Sessions
Resume work on any project exactly where you left off, with complete context restoration.
How it works:
Provide your session ID and the system instantly restores your project state, requirements, and progress.
Result:
Seamless continuation of development from exactly where you stopped.
3. Update Deployed Applications
Add features or modify existing applications while preserving current functionality.
How it works:
Describe what you want to change or add. The system updates your requirements and implements changes safely.
Result:
Enhanced application with new features while maintaining backward compatibility.
Multiplayer by Default
Unlike traditional AI development tools that work in isolation, Claude Code + Raindrop MCP is designed for team collaboration from the ground up. Every project creates a shared session that team members can join at any time. When you invite colleagues, they get complete access to the same project context, requirements, and progress.
Team members contribute based on their expertise - product managers define and refine requirements, developers implement features and review architecture, DevOps engineers handle deployment and infrastructure, and stakeholders provide input and approve decisions. Work flows naturally between team members. One person can start requirements gathering, another can handle implementation, and a third can manage deployment - all within the same continuous workflow.
When one team member advances the project, others see the updates immediately when they join the session. Progress, decisions, and context are synchronized across the entire team.
The Transformation
Before:
Claude Code helps you write individual code files and provides programming assistance.
After:
Claude Code becomes a complete application development platform that delivers working, deployed applications.
The difference is like the contrast between having a coding tutor and having an entire development team that handles everything from requirements to deployment.
Claude Code + Raindrop MCP makes it possible to go from “I have an idea for an app” to “Here’s the live URL where people can use it” through a single, guided conversation.
Previous
Bucket Storage
Next
KV

Key-Value Storage
URL: https://docs.liquidmetal.ai/concepts/kv/
Key-Value Storage
Ready to implement KV storage?
Check out the
KV reference documentation
for detailed API information and implementation examples.
Opening Context
What’s the fastest way to make your application feel sluggish? Query a database for the same information repeatedly. Every time a user loads a page that shows their profile information, their recent activity, and their preferences, you’re potentially hitting the database three times for data that rarely changes. Multiply this by thousands of users and database queries become the bottleneck that limits your application’s responsiveness.
Traditional solutions involve complex caching layers with invalidation strategies, cache warming, and coordination between multiple cache instances. You end up building intricate systems to manage when cached data is stale, how to efficiently update it, and how to handle cache misses gracefully. This complexity often outweighs the benefits for smaller applications.
Key-Value storage provides a different approach. Instead of trying to cache database results, you store frequently accessed data directly as simple key-value pairs. User preferences become
user:123:preferences
. Session data becomes
session:abc123:data
. Rate limiting counters become
rate:api-key-456:2024-03-15
. The storage is so fast that you can use it for both caching and primary storage of simple data.
Core Concepts
String-Based Addressing
Every piece of data gets a string key that serves as its unique identifier. Unlike database primary keys, these strings can encode meaningful information about the data’s purpose and scope. Keys like
user:123:preferences
or
feature-flag:premium-features:enabled
make the data’s purpose immediately clear.
Automatic Lifecycle Management
KV storage includes built-in time-to-live (TTL) functionality that automatically removes expired data. This isn’t just convenient - it’s essential for managing temporary data like session tokens, rate limiting windows, and cached calculations that become stale over time.
Atomic Operations
Simple operations on individual keys happen atomically. When you increment a counter or update a user preference, the operation either succeeds completely or fails completely. This atomicity makes KV storage reliable for critical operations like rate limiting or session management.
Global Distribution
Data stored in KV systems is automatically replicated across geographic regions for both performance and reliability. When a user in Tokyo accesses their session data, it’s served from nearby infrastructure without requiring round trips to distant data centers.
How It Works
KV storage operates through simple put/get operations with optional TTL specifications. When you store data, you specify its key, value, and optionally how long it should live. The storage system handles distribution, replication, and automatic cleanup without requiring application logic to manage these concerns.
The key design patterns significantly impact performance and organization. Keys that start with the same prefix (like
user:123:*
) can be efficiently batched or cleared together. Keys that encode timestamps or sequential data can create hotspots where all writes go to the same storage partition. Effective key design distributes load evenly while maintaining logical organization.
Expiration handling happens automatically in the background. When data reaches its TTL, the storage system removes it without requiring application intervention. This automatic cleanup prevents memory leaks and ensures that temporary data doesn’t accumulate indefinitely.
The consistency model prioritizes availability and performance. Individual key operations are atomic, but there’s no support for multi-key transactions. This limitation simplifies the system and enables very fast operations, but applications need to design around single-key atomicity.
Trade-offs and Considerations
Simplicity vs Complexity
KV storage excels at simple operations but doesn’t support complex queries, relationships, or transactions across multiple keys. Applications need to structure data to work within these constraints, which sometimes means duplicating information or accepting eventual consistency between related data.
Speed vs Persistence Guarantees
KV storage is optimized for fast access, but the distributed nature means there can be brief windows where data isn’t immediately consistent across all regions. For most applications this is invisible, but systems requiring strict consistency might need different storage approaches.
Memory vs Durability
Some KV implementations prioritize memory-based performance, which can mean that data persists only as long as the underlying infrastructure remains stable. Understanding the durability guarantees helps applications choose appropriate use cases.
TTL Precision vs Resource Efficiency
Automatic expiration is convenient but not perfectly precise. Data might persist slightly beyond its intended TTL, or might be cleaned up in batches rather than immediately upon expiration. Applications shouldn’t rely on exact timing for critical security operations.
Key Design Impact
Poor key design can create performance problems or make data management difficult. Keys that start with sequential data create hotspots. Keys without clear patterns make it hard to manage related data. The key structure you choose has long-term implications for performance and maintainability.
Connections
KV storage integrates naturally with services for session management and caching patterns. Services can store user authentication tokens, temporary API responses, and configuration data in KV storage while using databases for persistent business data. This division optimizes each storage type for its strengths.
The relationship with actors is complementary - actors maintain working state in memory while using KV storage for data that needs to survive actor restarts or be shared across actor instances. An actor might cache expensive calculations in KV storage or use it for coordination with other actors.
Database integration typically follows a cache-aside pattern where KV storage acts as a fast layer in front of slower database operations. Frequently accessed database results get cached with appropriate TTLs, reducing database load while ensuring data freshness.
Rate limiting and throttling systems rely heavily on KV storage for maintaining counters that increment frequently and expire automatically. The atomic increment operations and automatic cleanup make KV storage ideal for implementing sliding window rate limits or quota tracking.
Background processing systems can use KV storage for coordination and state management. Queue systems might track processing status, observers might maintain operational counters, and tasks might cache intermediate results to avoid recomputation on every execution.
Previous
Claude Code + Raindrop MCP
Next
Observers

Observers
URL: https://docs.liquidmetal.ai/concepts/observers/
Observers
Ready to implement observers?
Check out the
Observer reference documentation
for detailed API information, code examples, and implementation guidance.
Opening Context
How do you handle workflows that span multiple steps without creating tightly coupled systems? Traditional approaches often involve synchronous chains where one service calls another, which calls another, creating fragile dependencies. If any step in the chain fails, the entire workflow breaks. If one component is slow, it blocks everything downstream.
Consider a typical file processing workflow: a user uploads an image, which needs to be resized, optimized, scanned for inappropriate content, tagged with metadata, and indexed for search. In a synchronous system, the user waits for all these steps to complete. In an asynchronous but tightly coupled system, each step needs to know about the next step, creating maintenance nightmares when requirements change.
Observers solve this by creating event-driven architectures where components react to events without knowing who generated them. When a file is uploaded to bucket storage, an observer automatically detects this and begins processing. When it completes, it might trigger another event that another observer handles. Each component does its job independently, and the overall workflow emerges from these independent reactions.
Core Concepts
Event-Driven Activation
Observers don’t run continuously - they activate when specific events occur. When a file is uploaded to a bucket, when a message arrives in a queue, or when a storage operation completes, the relevant observer springs into action. This reactive model is both resource-efficient and naturally scalable.
Resource-Specific Binding
Each observer is bound to specific resources - particular buckets or queues. This creates clear responsibility boundaries where you know exactly which observer handles events from which resource. The binding also enables efficient event routing since the system knows which code to execute for each event.
Automatic Retry and Error Handling
When observers fail to process events, the underlying system provides automatic retry mechanisms. Failed events don’t disappear - they get retried with exponential backoff, and ultimately can be moved to dead letter queues for manual investigation. This robustness makes observers reliable for critical business processes.
Concurrent Processing
Multiple observer instances can process events simultaneously, providing natural parallelism for high-volume workflows. When many files are uploaded simultaneously, multiple observer instances can process them in parallel without requiring explicit coordination.
How It Works
Observer execution follows an event-delivery pattern where the underlying infrastructure detects events and invokes observer code. When a file is uploaded to a bucket, the storage system generates an event containing information about the uploaded object. The system then locates the observer bound to that bucket and executes its code with the event details.
The event payload contains everything needed to process the change: object keys for storage events, message content for queue events, metadata about the operation, and timestamps. Observer code can use this information to perform appropriate processing without needing to query for additional context.
Error handling and retry logic operate at the infrastructure level. If observer code throws an exception, the system marks the event as failed and schedules it for retry. Retry attempts use exponential backoff to avoid overwhelming downstream systems. After multiple failed attempts, events can be routed to dead letter queues for manual investigation and reprocessing.
Scaling happens automatically based on event volume. When many events arrive simultaneously, the system spawns multiple observer instances to handle the load. When event volume decreases, unused instances are cleaned up. This elasticity ensures that observers can handle both steady-state and burst workloads efficiently.
Trade-offs and Considerations
Asynchronous vs Real-Time
Observers excel at asynchronous processing but aren’t suitable for operations requiring immediate feedback to users. There’s inherent latency between event generation and observer execution, making observers inappropriate for synchronous user interactions.
Event Ordering vs Parallel Processing
While observers can process events in parallel for better throughput, this means events might not be processed in the exact order they occurred. Applications requiring strict ordering need to implement coordination mechanisms or use different architectural patterns.
Eventual Consistency vs Immediate Consistency
Observer-based workflows create eventually consistent systems where changes propagate over time rather than happening atomically. This is usually acceptable for background processing but might not work for workflows requiring immediate consistency.
Debugging and Observability
Event-driven systems can be harder to debug since the flow of execution jumps between different components triggered by events. Good logging and monitoring become critical for understanding system behavior and diagnosing issues.
Resource Usage vs Cost
Observers consume compute resources only when events occur, making them cost-effective for intermittent workflows. However, the infrastructure needed to support event detection and delivery adds operational overhead that might not be justified for simple synchronous operations.
Connections
Observers naturally integrate with queues to create sophisticated workflow orchestration systems. Services can send messages to queues, observers process those messages and potentially send results to other queues, creating multi-stage processing pipelines that are both resilient and scalable.
The relationship with bucket storage enables powerful file processing workflows. When users upload files, observers can automatically trigger image processing, document analysis, virus scanning, or content indexing without requiring synchronous processing that would slow down the user experience.
Database integration allows observers to update persistent state based on events. An observer processing uploaded images might update database records with metadata, processing status, or analysis results. This creates a pattern where events drive data updates across the system.
Actors can coordinate with observers for stateful event processing. An observer might send updates to specific actors based on event content, enabling stateful workflows that maintain context across multiple events while benefiting from observer-based triggering mechanisms.
The connection to external systems makes observers powerful integration points. Observers can react to internal events by calling external APIs, sending notifications, updating third-party systems, or triggering webhooks, creating bridges between your application and the broader ecosystem.
Previous
KV
Next
Queues

Queues
URL: https://docs.liquidmetal.ai/concepts/queues/
Queues
Queues in Raindrop provide reliable message passing between application components, enabling asynchronous processing and loose coupling. Instead of direct service calls, components can send messages to queues where dedicated observers process them at optimal speeds.
Ready to implement queues?
Check out the
Queue reference documentation
for detailed API information and implementation examples.
What Queues Provide
Asynchronous Processing
Decouple message production from consumption, allowing components to work at different speeds without blocking each other.
Reliable Delivery
Messages persist until successfully processed, providing natural retry behavior and ensuring work completion even during failures.
Load Balancing
Distribute work across multiple observer instances for parallel processing and improved throughput.
Decoupled Architecture
Eliminate direct dependencies between components by using message passing instead of direct service calls.
When to Use Queues
Good Fit
Background Processing
: Email sending, file processing, data analysis that doesn’t need immediate completion
Event-Driven Workflows
: Multi-step processes where each stage can complete independently
Traffic Buffering
: Handle traffic spikes by queuing work for processing at sustainable rates
Cross-Component Communication
: Enable loose coupling between services and actors
Consider Alternatives
Immediate Results
: User-facing operations requiring instant responses should use direct service calls
Simple State Storage
: Basic data persistence works better with databases or KV storage
Scheduled Operations
: Time-based tasks belong in Tasks rather than message-driven processing
Integration Patterns
Producer-Consumer Model
Services and actors produce messages while observers consume them, creating clear separation between work generation and execution.
Workflow Orchestration
Chain multiple processing steps by having observers send messages to subsequent queues, building complex workflows.
Event Sourcing
Capture all system changes as events in queues, enabling audit trails and system state reconstruction.
Load Distribution
Multiple observer instances can process messages from the same queue, automatically distributing work for parallel processing.
Queues excel at building resilient, scalable systems where components communicate through reliable message passing rather than direct coupling.
Previous
Observers
Next
Services

Services
URL: https://docs.liquidmetal.ai/concepts/services/
Services
Services in Raindrop provide stateless, HTTP-based compute units that handle API endpoints, webhooks, and request-response patterns. Each service specializes in specific responsibilities and can communicate with other services through bindings or public endpoints.
Ready to implement services?
Check out the
Services reference documentation
for detailed API information, configuration examples, and implementation guidance.
What Services Provide
Stateless Request Handling
Each HTTP request is processed independently without maintaining state between requests, enabling horizontal scaling and simple deployment patterns.
Specialized Responsibilities
Services focus on specific domains like user authentication, file processing, or data validation, creating clear architectural boundaries.
Service Bindings
Direct communication between internal services bypasses public internet routing for faster, more secure inter-service calls.
HTTP Integration
Native support for web standards including routing, middleware, and response formatting for API development.
When to Use Services
Good Fit
API Endpoints
: REST APIs, GraphQL endpoints, and webhook handlers that process HTTP requests
Request-Response Patterns
: Operations that receive input, process it, and return results immediately
Stateless Operations
: Data transformations, validations, and computations that don’t require persistent state
Integration Points
: External API clients, payment processing, and third-party service integrations
Consider Alternatives
Stateful Operations
: User sessions, shopping carts, or workflows that need persistent state work better with Actors
Background Processing
: Long-running tasks or asynchronous work should use Queues and Observers
Scheduled Operations
: Time-based maintenance and periodic tasks belong in Tasks
Integration Patterns
Database Access
Services read from and write to shared databases, making them ideal for CRUD operations and complex queries across multiple entities.
Event-Driven Architecture
Services can publish messages to queues and trigger observers, enabling loose coupling between components through asynchronous communication.
Microservice Architecture
Multiple services can be developed, deployed, and scaled independently while communicating through bindings or HTTP calls.
Public Endpoints
Services with public domains serve as entry points for external clients, mobile apps, and browser-based applications.
Services excel at handling discrete, well-defined operations that can be processed independently and scaled based on demand.
Previous
Queues
Next
SmartBuckets

SmartBuckets
URL: https://docs.liquidmetal.ai/concepts/smartbuckets/
SmartBuckets
What are SmartBuckets?
SmartBuckets provide object storage that automatically processes your files with AI during upload. Your data becomes immediately ready for AI applications, agents, human consumption, and RAG pipelines.
SmartBuckets store files like a traditional bucket, then automatically read and understand every page, image, and table. This processing makes all information instantly searchable and usable. Both humans and AI agents can interact with your data through specialized AI endpoints.
Understanding AI Decomposition
When you upload a file to a SmartBucket, it triggers AI decomposition. This process transforms raw files into AI-enhanced resources. Here’s what happens when you upload a PDF:
flowchart TD
pdf("PDF Input")
text(Text)
images(Images)
tables(Tables)
metadata(Metadata)
pdf --> text
pdf --> images
pdf --> tables
pdf --> metadata
subgraph one ["AI Layer"]
ai1(AI model 1)
ai2(AI model 2)
ai3(AI model 3)
end
text --> one
images --> one
tables --> one
metadata --> one
one --> A[(Datastore)]
one --> B[(Datastore)]
one --> C[(Datastore)]
The decomposition process works in several stages:
First, the system identifies and extracts different types of content from your file - text, images, tables, metadata and more.
Each component is then processed through specialized AI models designed for that specific type of content
The enhanced data is stored in optimized datastores, maintaining relationships between different components
All of this processed information becomes immediately available for AI queries
Note
The AI enhancement layer evolves over time. As we integrate new AI models and capabilities, your stored data automatically benefits from these improvements.
AI models and AI data stores
When you upload data to a SmartBucket, our AI pipeline analyzes it and stores the results in multiple specialized systems including vector stores, graph databases, and relationship stores.
The processing pipeline includes several analysis models that:
Detect PII (Personal Identifiable Information)
Screen for harmful content (coming soon)
Extract relationships between data
Identify topics and themes
Generate metadata for improved searchability
Transcribe audio
Describe images
While the specific implementation details of our AI models are proprietary, these automated processes ensure your data is thoroughly analyzed and indexed for advanced querying capabilities.
Supported Data Types and Processing
While you can store any file type, SmartBuckets provide AI enhancement for specific formats:
Images
image/png
image/jpg
Audio
audio/webm
audio/mpeg
audio/wav
audio/mp4
Documents
text/plain
application/pdf
This focused support provides detailed analysis of your content. For regular file storage needs, we recommend using standard Raindrop buckets, as SmartBuckets’ pricing is optimized for AI-enhanced storage rather than basic file storage.
Managing Data
SmartBuckets provide SDKs and APIs for data management, making it familiar for developers while adding powerful AI capabilities. When you add data to a SmartBucket, it automatically triggers the AI enhancement pipeline, preparing your content for advanced search and retrieval.
Adding Data
When you upload files to a SmartBucket, several processes occur:
The file is stored securely in the underlying storage system
The AI decomposition pipeline analyzes and processes the content
The extracted information is indexed for search and retrieval
You can add data to a SmartBucket through the
API, CLI, and SDK
.
Note
Remember that while SmartBuckets accept any file type, only supported formats receive AI enhancement.
Removing Data
When you delete data from a SmartBucket, the system:
Removes the original file from storage
Cleans up all associated AI-enhanced data
Updates indexes and search capabilities accordingly
You can remove data from a SmartBucket through the
API, CLI, and SDK
.
Query Types and Search Capabilities
SmartBuckets offer multiple search mechanisms, each designed for specific use cases and user needs.
Natural Language Search
Natural language search accepts simple English queries instead of complex search syntax. Describe what you’re looking for in plain language, and the system finds relevant results.
For example, instead of constructing a complex boolean query, you might ask: “Find all documents about climate change that include graphs of temperature data.” The system understands the semantic meaning of your request and searches across both textual content and visual elements to find relevant matches.
General search expands beyond simple keyword matches. You can use natural language queries that span multiple types of content. For example, imagine a law firm that needs to find specific case files. They could search:
“Find documents with photos of property damage and text about insurance fraud”
This query demonstrates the search capabilities. It searches both images and text simultaneously, understands plain English requests, and finds related content across documents.
The system supports complex nested queries for example:
“Find documents containing financial reports and images of signatures”
“Find documents with employee photos where the person is wearing a blue uniform and the text mentions ‘safety violations’”
“Find contracts containing both company logos and signatures where the document text mentions ‘confidentiality’”
“Find documents about company policies that contain PII specifically emails and names”
“Find audio files in which people discuss data policies”
Natural language search is available through the
API, CLI, and SDK
.
Chunk Search for AI Integration
Chunk search is specifically designed for AI applications and RAG pipelines. This specialized search function:
Analyzes input queries for semantic understanding
Returns the 20 most relevant text chunks from your data
Ranks results based on relevance to the query
Optimizes output format for LLM consumption
Chunk search finds relevant content and returns the exact paragraphs that answer your question. The system returns these text chunks ranked by relevance, ready for AI applications.
Chunk search is available through the
API, CLI, and SDK
.
Document Query
Document Query lets you have AI-powered conversations about your stored documents. You can ask questions about any part of a document - text, images, tables, or metadata - and get relevant answers based on the document’s content.
Document Query integrates directly with large language models. Every query you make is processed by an LLM that has full context of your document, including all the enhanced data extracted by SmartBuckets’ AI layer. This means you can ask complex questions, request specific analyses, or extract structured data with natural language commands.
For implementation details, refer to our
API documentation
or
SDK examples
.
Advanced Search Capabilities
SmartBuckets provide several specialized search features enabled by expert AI models run on your content during upload:
Content Analysis:
Document content search with semantic understanding
Image content analysis and recognition
Audio transcription search
Cross-modal query support
Security Features:
PII (Personal Identifiable Information) detection
Access logging and tracking (coming soon)
Sensitive data identification (coming soon)
Tip
Combine multiple search criteria to use SmartBuckets’ cross-modal understanding capabilities.
Personal Identifiable Information (PII)
SmartBuckets can detect the following types of personal identifiable information (PII):
Account numbers
Building numbers
City names
Credit card numbers
Dates of birth
Driver’s license numbers
Email addresses
Given names (first names)
ID card numbers
Passwords
Social security numbers
Street addresses
Surnames (last names)
Tax identification numbers
Telephone numbers
Usernames
ZIP codes
PII detection can be incorporated into your queries using the search endpoint.
Example search queries for PII:
“Find documents containing personal information”
“Find all documents that do not contain PII”
“Find PDF documents that contain emails and social security numbers”
Pricing and Token Usage
SmartBucket operations use token-based pricing determined by query complexity and type. SmartBuckets use a unified flat-rate token system where input and output tokens cost the same. Token consumption depends on underlying AI agent operations, not final output size or format.
Caution
Token consumption figures are estimates for planning purposes only. Actual token usage is calculated by our systems and appears on your monthly invoice. These estimates cannot be used for billing adjustments.
Core Query Types and Token Usage
Search Operations
Search operations utilize an advanced AI agent to process queries and analyze data including derived metadata. Token consumption scales with query complexity, particularly with the number of sub-questions or conditions in a query.
Base token consumption:
Base search query: ~2,750 tokens
Additional sub-question: ~1,100 tokens per question
Examples of token consumption:
“Give me all my PDFs” - uses approximately 2,750 tokens
“Give me all my PDFs without pictures of cats” - uses approximately 3,850 tokens (2,750 + 1,100)
“Give me all my PDFs without pictures of cats, that do not contain PII” - uses approximately 4,950 tokens (2,750 + 1,100 + 1,100)
Chunk Search Operations
Chunk search operations follow a simpler token model with consistent token usage:
Each chunk search request: ~900 tokens
Token consumption remains constant regardless of result size
Document query
Document query operations scale with both input document size and query complexity:
Base cost per document query: ~1000 tokens
Document processing: ~800 tokens per page of text
Query response generation: Varies based on requested output format and length
Token breakdown for a typical document operation:
Base cost: 1,000 tokens
Document processing: 4,000 tokens (5 pages × 800 tokens)
Summary generation: ~1,000 tokens
Total: ~6,000 tokens
Previous
Services
Next
SmartMemory

SmartMemory
URL: https://docs.liquidmetal.ai/concepts/smartmemory/
SmartMemory
Opening Context
Why does memory matter for AI? Most AI interactions are stateless - each conversation starts fresh with no awareness of what happened before. This creates jarring experiences where you repeat yourself endlessly and agents never learn from interactions.
SmartMemory solves the continuity problem. It enables AI agents to remember past conversations, learn from experience, and build knowledge over time. Instead of starting every interaction from scratch, agents can recall what happened yesterday, last week, or last month.
This persistent memory transforms AI from a collection of isolated responses into ongoing relationships where understanding deepens through continued interaction.
Ready to implement SmartMemory?
Check out the
SmartMemory reference documentation
for detailed API information, configuration options, and implementation examples.
Core Concepts
SmartMemory mirrors human cognitive architecture through four specialized memory systems that operate at different scales and persistence levels:
Working Memory - Session-Based Active Context
The immediate conversational state within a single session, implemented as an
Actor
that maintains real-time interaction context. You can organize memories into timelines (like
technical
and
planning
) within the same session. Each memory entry includes content, timeline, agent attribution, and temporal metadata. Working memory supports both exact retrieval (
getMemory()
) and AI-powered semantic search (
searchMemory()
) for finding relevant context during active conversations.
Episodic Memory - Conversation History Archives
Completed sessions automatically become searchable episodes stored in
SmartBuckets
for long-term retrieval. When you flush working memory, the system generates AI-powered summaries that capture session essence while preserving searchable detail. Sessions can be rehydrated (
rehydrateSession()
) to restore complete conversational state, or queried selectively for relevant historical context. This enables AI agents to reference “what we discussed last month about the database migration.”
Semantic Memory - Structured Knowledge Documents
Factual information stored as JSON documents in
SmartBuckets
with vector search capabilities. Unlike episodic memories tied to specific conversations, semantic memories represent timeless knowledge - company policies, technical documentation, learned facts. The system automatically generates embeddings for semantic search, letting agents find relevant knowledge based on meaning rather than exact keywords.
Procedural Memory - Behavioral Templates and Skills
Reusable procedures, system prompts, and behavioral patterns stored as key-value pairs accessible across all sessions. This includes system prompts that define agent personality, workflow templates for recurring tasks, and response patterns for consistent behavior. Procedural memory provides the “how” that semantic memory’s “what” and episodic memory’s “when” cannot capture.
Each memory system addresses different temporal scales: working memory for minutes, episodic memory for sessions spanning hours or days, semantic memory for persistent knowledge, and procedural memory for behavioral consistency across all interactions.
How It Works
Actor-Based Working Memory Architecture
Each SmartMemory session creates a dedicated
Actor
instance that maintains conversational state with strong consistency. The actor persists memory entries with structured metadata including timeline, agent attribution, and temporal information. Timeline organization (
timeline: 'technical'
) enables parallel conversation threads within the same session. The actor handles both exact lookups for specific memories and AI-powered search using embedded content similarity.
Session Lifecycle Management
Sessions begin with
startWorkingMemorySession()
, creating a new actor instance with a unique session ID. Memory entries accumulate through
putMemory()
calls during active conversation. Session termination via
endSession(flush: true)
triggers asynchronous consolidation - the actor summarizes accumulated memories using AI models and stores the complete session as an episodic document. The session actor can then be garbage collected while the episodic record remains searchable.
Multi-Level Search Intelligence
Memory search operates at multiple levels. Working memory search (
searchMemory()
) uses vector similarity against active session content for immediate context retrieval. Episodic search (
searchEpisodicMemory()
) queries across all historical sessions using AI embeddings stored in
SmartBuckets
. Semantic search (
searchSemanticMemory()
) finds factual knowledge documents by content similarity. Each search type falls back to text matching if vector search fails, ensuring reliable retrieval.
State Restoration and Continuity
Session rehydration (
rehydrateSession()
) reconstructs complete conversational state from episodic storage back into working memory. This process restores all memory entries, timeline organization, and conversational context, enabling seamless conversation continuation across different time periods. The system tracks rehydration status to handle complex state reconstruction asynchronously.
Cross-Memory System Coordination
The four memory types operate independently but share common interfaces. Procedural memory serves behavioral templates to all sessions. Semantic memory provides factual knowledge across conversations. Episodic memory enables historical context retrieval. Working memory coordinates active processing while maintaining session isolation through the actor model. This architecture ensures both immediate responsiveness and long-term learning.
Trade-offs and Considerations
Memory Architecture vs Simple State
SmartMemory provides sophisticated multi-level memory at the cost of complexity. For applications needing conversational continuity, learning behavior, or historical context, the four-memory architecture delivers significant value. However, simple stateless AI interactions or basic caching needs may be over-engineered with SmartMemory. Consider using basic
KV storage
or
Actor
state for simpler persistence requirements.
Actor Resource Consumption vs Scalability
Working memory sessions create persistent
Actor
instances that consume resources even when idle. This provides immediate responsiveness and strong consistency but limits scalability compared to stateless alternatives. For applications with thousands of concurrent sessions, consider session consolidation strategies or implement session hibernation for inactive conversations.
Search Performance vs Memory Volume
Vector search using AI embeddings scales logarithmically with memory volume, providing excellent performance for semantic retrieval. However, large working memory sessions (500+ entries) take significant time to summarize and flush. Text search fallback becomes slower with massive episodic datasets. Design memory retention policies balancing context richness with search performance.
Memory Granularity vs Storage Efficiency
Fine-grained memory entries (individual messages) provide precise context but increase storage overhead and search complexity. Coarse-grained entries (conversation summaries) reduce storage costs but lose contextual detail. The optimal granularity depends on your application’s context requirements - customer service benefits from detailed interaction history, while creative assistants may prefer conceptual summaries.
Cross-Session Learning vs Privacy
Semantic and procedural memories persist across all sessions, enabling genuine learning and behavioral consistency. However, this creates privacy implications where information learned in one conversation affects others. Implement memory segmentation (user-specific semantic memories) or periodic memory purging for privacy-sensitive applications.
Rehydration Complexity vs Continuity
Session rehydration enables seamless conversation resumption but adds complexity around state reconstruction, error handling, and partial restoration. Simple applications may prefer starting fresh conversations rather than managing rehydration workflows. Consider your user experience requirements when deciding between stateless and stateful AI interactions.
Connections
Relationship to Actor Model
SmartMemory uses Raindrop’s actor system for session isolation and persistence. Each working memory session runs as an independent actor, ensuring conversations don’t interfere with each other while maintaining strong consistency within sessions.
Integration with AI Models
Memory search leverages the same AI models powering your conversations. Vector embeddings for semantic search use identical models to your chat completions, creating consistent understanding across memory and generation.
Complementary Storage Systems
SmartMemory works alongside other Raindrop storage options. Use SmartBuckets for large document collections, SQL databases for structured application data, and KV stores for configuration. Each serves different needs in the overall architecture.
Building Agent Ecosystems
Multiple agents can share semantic and procedural memory while maintaining separate episodic histories. This creates AI teams where agents share knowledge but maintain individual conversation threads.
Beyond Conversational AI
While designed for chat experiences, SmartMemory enables any application needing adaptive behavior over time. Learning systems, personalization engines, and context-aware automation all benefit from persistent memory that understands both history and meaning.
SmartMemory transforms stateless AI interactions into ongoing relationships where understanding compounds through continued engagement.
Previous
SmartBuckets
Next
SmartSQL

SmartSQL
URL: https://docs.liquidmetal.ai/concepts/smartsql/
SmartSQL
SmartSQL changes how you interact with databases. It runs regular SQL queries and converts plain English into SQL. It finds sensitive data automatically and tracks your database structure for better AI queries.
Ready to implement SmartSQL?
Check out the
SmartSQL reference documentation
for detailed API information and implementation examples.
What SmartSQL Provides
Natural Language to SQL
Ask questions in plain English and get accurate SQL queries. “Show me all users who joined last month” becomes properly structured SQL that understands your database schema.
Automatic PII Detection
Every data modification is analyzed for personal information like emails, names, and phone numbers. PII findings are stored separately and tracked consistently across updates.
Schema Intelligence
Your database metadata stays current automatically. SmartSQL learns your table structures and sample data to generate better queries and provide context for AI operations.
Dual Query Interface
Execute direct SQL when you know exactly what you want, or use natural language when you need to explore or when SQL syntax isn’t convenient.
How SmartSQL Works
When you ask SmartSQL to “find users who haven’t logged in recently,” several processes work together:
Query Analysis
: The system examines your request and current database metadata to understand what tables and columns are relevant
SQL Generation
: AI models convert your natural language into proper SQL, using safety tokens to prevent injection attacks
Execution and Processing
: The generated query runs against your database, with results formatted as JSON or CSV
PII Scanning
: If the query modified data, background processes check for personal information and update detection records
Metadata Updates
: Schema changes trigger metadata updates so future queries understand your database structure better
AI models understand your questions and create proper SQL. Safety checks stop malicious prompts while keeping queries flexible.
Understanding Data Processing
SmartSQL operates through specialized services that handle different aspects of query processing:
Manager Service
Coordinates query execution, handles both SQL and natural language inputs, and manages the overall request lifecycle.
PII Detection Service
Runs background analysis on data modifications using Hugging Face models to identify personal information across multiple entity types.
Metadata Service
Maintains current database schema information, including table structures, column types, and sample data for AI context.
Queue-Based Communication
Services communicate through message queues for reliable background processing, ensuring PII detection and metadata updates happen without blocking query responses.
This distributed approach means your queries return quickly while data analysis continues in the background.
When to Use SmartSQL
Good Fit
Data Exploration
: When you need to ask questions about your data but aren’t sure of the exact SQL syntax
PII Compliance
: Applications that need to track and monitor personal information across database operations
Dynamic Schemas
: Databases where table structures change and you need AI to understand the current layout
Mixed Query Needs
: Applications requiring both precise SQL control and flexible natural language access
Consider Alternatives
High-Performance Analytics
: Complex analytical workloads might need specialized database tools
Simple CRUD Operations
: Basic create/read/update/delete operations work fine with standard database bindings
Real-Time Requirements
: Natural language processing adds latency that might not suit millisecond-critical applications
Integration Patterns
Hybrid Query Strategy
Use direct SQL for known operations and natural language for exploration, data discovery, and user-facing query interfaces.
PII Compliance Workflow
SmartSQL detects and tracks personal information as your application processes data. This builds compliance documentation without extra development work.
Schema Evolution Support
As your database structure changes, SmartSQL adapts its understanding automatically, keeping AI query generation current with your actual data model.
Background Processing
PII detection and metadata updates happen asynchronously, so your application gets query results immediately while compliance scanning continues behind the scenes.
SmartSQL connects precise database control with flexible natural language queries. You get intuitive data access with strong security and compliance features.
Safety and Security
Query processing includes multiple safety layers. These prevent malicious usage while preserving legitimate flexibility.
Prompt Injection Protection
Natural language queries use safety token validation to ensure generated SQL matches the original intent and hasn’t been manipulated by embedded prompts.
SQL Injection Prevention
Generated queries go through standard parameterization and validation before execution, following established database security practices.
PII Data Isolation
Personal information detection results are stored in separate system tables with indexed lookups, keeping sensitive data organized and trackable.
Authentication Integration
External API access requires JWT tokens with proper user and organization claims, preventing unauthorized access to database operations.
The system balances security with flexibility. Legitimate queries work smoothly while blocking potential abuse.
Previous
SmartMemory
Next
SQL

SQL Databases
URL: https://docs.liquidmetal.ai/concepts/sql/
SQL Databases
SQL databases in Raindrop provide structured, relational data storage with ACID guarantees for applications that need data consistency, complex queries, and relationships between entities.
Ready to implement SQL databases?
Check out the
SQL Database reference documentation
for detailed API information, schema management, and implementation examples.
What SQL Databases Provide
Structured Data Storage
Tables with defined schemas ensure data consistency and enable powerful queries across related entities.
ACID Transactions
Atomicity, Consistency, Isolation, and Durability guarantees ensure data integrity even during complex operations or system failures.
Powerful Query Language
SQL enables complex filtering, joining, aggregation, and analysis operations directly in the database.
Data Relationships
Foreign keys and constraints maintain referential integrity between related entities like users, orders, and products.
When to Use SQL Databases
Good Fit
Related Data
: Customer orders, user profiles, product catalogs where entities reference each other
Complex Queries
: Reporting, analytics, and multi-table operations
Data Integrity
: Financial transactions, inventory management, or other critical data that requires consistency
Compliance
: Applications needing audit trails and data validation
Consider Alternatives
Simple Key-Value Data
: User preferences, session data, or cache values work better in KV storage
High-Throughput Simple Operations
: Sensor data or logs might be better suited for other storage types
Frequently Changing Schema
: Rapidly evolving data structures might benefit from more flexible storage
Integration Patterns
Services as Database Clients
Services handle SQL queries, connection management, and transform database results into API responses.
Actor State Persistence
Actors can load initial state from SQL tables and persist changes while maintaining in-memory performance.
Schema Management
Migration files manage database schema evolution across development, testing, and production environments.
SQL databases provide the foundation for data-driven applications that need reliability, consistency, and powerful query capabilities.
Previous
SmartSQL
Next
Tasks

Tasks
URL: https://docs.liquidmetal.ai/concepts/tasks/
Tasks
Tasks in Raindrop provide scheduled operations that run on predictable timetables using cron expressions. Instead of external cron jobs or background services, tasks bring scheduled work into your application code with full access to resources and environment.
Ready to implement tasks?
Check out the
Tasks reference documentation
for detailed API information, code examples, and implementation guidance.
What Tasks Provide
Cron-Based Scheduling
Precise timing control using familiar cron expressions for complex schedules like “2:15 AM on the first day of each month” or “every 10 minutes during business hours.”
Resource Access
Full access to databases, storage, and external services using the same configuration and patterns as other application components.
Independent Execution
Tasks run separately from user-facing operations without interfering with HTTP requests or blocking interactive features.
Reliable Scheduling
Automatic execution at specified times with built-in retry logic and failure handling for consistent operation.
When to Use Tasks
Good Fit
Maintenance Operations
: Database cleanup, log rotation, cache invalidation that must happen on schedule
Report Generation
: Periodic reports, data exports, and analytics processing that run at specific intervals
Data Synchronization
: Pulling updates from external APIs or reconciling data between systems
Health Monitoring
: System status checks and automated alerting that runs continuously
Consider Alternatives
Event-Driven Processing
: Work triggered by user actions or external events works better with Services and Queues
Immediate Processing
: Operations requiring instant responses should use Services instead of scheduled execution
Variable Timing
: Work that depends on data availability rather than time should use Queues or Observers
Integration Patterns
Maintenance Automation
Automate database cleanup, temporary file removal, and system maintenance without external infrastructure or coordination.
Periodic Data Processing
Process accumulated data, generate summaries, and update derived information on regular schedules.
External Integration
Pull data from external APIs, synchronize with third-party services, and maintain data consistency across systems.
System Monitoring
Continuously monitor system health, verify external dependencies, and alert when problems arise.
Tasks excel at operations that must happen consistently on schedule regardless of user activity or system load.
Previous
SQL
Next
Vector

Vector Search
URL: https://docs.liquidmetal.ai/concepts/vector/
Vector Search
Vector search in Raindrop enables semantic search and similarity matching by converting content into high-dimensional numerical representations. Instead of exact keyword matching, vector search understands meaning and context to find related content even when exact terms differ.
Ready to implement vector search?
Check out the
Vector reference documentation
for detailed API information, configuration options, and implementation examples.
What Vector Search Provides
Semantic Understanding
Find content based on meaning rather than exact keywords, enabling searches that understand context and relationships between concepts.
Similarity Matching
Identify related documents, products, or content based on conceptual similarity rather than literal text matches.
AI-Powered Discovery
Enable recommendation systems and content discovery that surface relevant information based on user behavior and preferences.
Embedding Integration
Store and query high-dimensional vectors generated by AI models alongside metadata for hybrid search capabilities.
When to Use Vector Search
Good Fit
Content Discovery
: Find related articles, documentation, or media based on semantic similarity
Recommendation Systems
: Suggest products, content, or connections based on user preferences and behavior
Knowledge Base Search
: Enable users to find information using natural language rather than exact keywords
Duplicate Detection
: Identify similar or duplicate content even when wording differs significantly
Consider Alternatives
Exact Matching
: Product codes, IDs, or specific technical terms work better with traditional keyword search
Structured Queries
: Complex filtering and sorting operations belong in SQL databases
High-Frequency Identical Queries
: Repeated exact searches benefit more from traditional caching
Integration Patterns
Hybrid Search Systems
Combine vector search with traditional keyword search to provide both semantic understanding and exact match capabilities.
Content Processing Pipelines
Generate embeddings when content is created or updated, storing both original content and vector representations for search.
Recommendation Engines
Use vector similarity to build recommendation systems that suggest related items based on user interactions and preferences.
Metadata Filtering
Combine semantic search with traditional filtering to find similar content within specific categories, dates, or other constraints.
Vector search excels at understanding meaning and context to provide intelligent content discovery and recommendation capabilities.
Previous
Tasks
Next
Actors

Actor
URL: https://docs.liquidmetal.ai/reference/actor/
Actor
Actors provide stateful compute units with persistent storage and unique identity. Each actor instance runs independently with dedicated storage that persists between requests. Actors handle requests serially to maintain data consistency.
Actors support scheduled operations through alarms. You can set alarms to trigger actor execution at specific times. This enables cron-like functionality and delayed processing patterns.
The Actor system provides complete isolation between instances. Each actor maintains its own storage space with a maximum of 10GB total storage, 2MB per key, and 2MB per value.
Creating
Add an actor to your raindrop.manifest file:
application
"my-application"
{
actor
"demo-actor"
{
}
}
Accessing
Access actors through environment bindings in your service handlers:
export
default
{
async
fetch
(
request
:
Request
,
env
:
Env
)
:
Promise
<
Response
> {
// Get actor by name-derived ID
const
actorId
=
env
.
DEMO_ACTOR
.
idFromName
(
"
user-123
"
);
const
actor
=
env
.
DEMO_ACTOR
.
get
(actorId);
// Make RPC call to actor
const
result
= await
actor
.
processRequest
(request);
return
new
Response
(result);
}
}
Core Concepts
Main Interfaces
Actor<Env>
- Abstract base class for implementing actor logic
ActorNamespace<T>
- Factory for creating and accessing actor instances
ActorStub<T>
- Client for making RPC calls to actor instances
ActorState
- Runtime state interface provided to actor constructors
Core Data Types
ActorId
interface
ActorId {
toString
()
:
string
;
equals
(
other
:
ActorId
)
:
boolean
;
readonly
name
?:
string
;
}
Represents unique actor instance identifier. Compare IDs using
equals()
method rather than direct comparison.
ActorStorage
interface
ActorStorage {
get
<
T
>
(
key
:
string
)
:
Promise
<
T
|
undefined
>;
get
<
T
>
(
keys
:
string
[]
)
:
Promise
<
Map
<
string
,
T
>>;
put
<
T
>
(
key
:
string
,
value
:
T
)
:
Promise
<
void
>;
put
<
T
>
(
entries
:
Record
<
string
,
T
>
)
:
Promise
<
void
>;
delete
(
key
:
string
)
:
Promise
<
boolean
>;
delete
(
keys
:
string
[]
)
:
Promise
<
number
>;
list
<
T
>
(
options
?:
ListOptions
)
:
Promise
<
Map
<
string
,
T
>>;
setAlarm
(
scheduledTime
:
number
|
Date
)
:
Promise
<
void
>;
getAlarm
()
:
Promise
<
number
|
null
>;
deleteAlarm
()
:
Promise
<
void
>;
}
Provides persistent key-value storage for actor instances. Supports batch operations for efficient data access.
ActorState
interface
ActorState {
readonly
id
:
ActorId
;
readonly
storage
:
ActorStorage
;
waitUntil
(
promise
:
Promise
<
any
>
)
:
void
;
blockConcurrencyWhile
<
T
>
(
callback
:
()
=>
Promise
<
T
>
)
:
Promise
<
T
>;
}
Runtime state interface passed to actor constructors. Provides access to storage and concurrency control methods.
System Limits
Maximum storage per actor: 10GB
Maximum key size: 2MB per key
Maximum value size: 2MB per value
Request processing: Serial execution (not concurrent)
idFromName
Input
Output
idFromName
(name: string): ActorId
ActorId
Creates deterministic actor ID from string name.
// Generate consistent ID for named actor
const
userId
=
env
.
USER_ACTOR
.
idFromName
(
"
user-456
"
);
const
userActor
=
env
.
USER_ACTOR
.
get
(userId);
get
Input
Output
get
(id: ActorId, options
?:
ActorGetOptions): ActorStub
<
T
>
ActorStub
<
T
>
Gets or creates actor instance by ID.
// Create actor stub for RPC calls
const
actorId
=
env
.
CHAT_ACTOR
.
idFromName
(
"
room-789
"
);
const
chatActor
=
env
.
CHAT_ACTOR
.
get
(actorId
, {
locationHint:
'
wnam
'
}
);
jurisdiction
Input
Output
jurisdiction
(jurisdiction: ActorJurisdiction): ActorNamespace
<
T
>
ActorNamespace
<
T
>
Gets actor namespace within specific jurisdiction.
// Create EU jurisdiction namespace
const
euActors
=
env
.
DATA_ACTOR
.
jurisdiction
(
'
eu
'
);
const
euActorId
=
euActors
.
idFromName
(
"
eu-user-123
"
);
get (storage)
Input
Output
get
<
T
>(key: string):
Promise
<
T
|
undefined
>
get
<
T
>(keys: string[]):
Promise
<
Map
<
string,
T
>>
Promise
<
T
|
undefined
>
Promise
<
Map
<
string,
T
>>
Retrieves values from actor storage by key or keys.
// Get single value
const
userPrefs
= await
this
.
state
.
storage
.
get
<
UserPreferences
>
(
"
prefs
"
);
// Get multiple values
const
data
= await
this
.
state
.
storage
.
get
([
"
config
"
,
"
state
"
,
"
metrics
"
]);
put (storage)
Input
Output
put
<
T
>(key: string, value:
T
):
Promise
<
void
>
put
<
T
>(entries: Record
<
string,
T
>
):
Promise
<
void
>
Promise
<
void
>
Stores values in actor storage.
// Store single value
await
this
.
state
.
storage
.
put
(
"
lastActive
"
, Date
.
now
());
// Store multiple values
await
this
.
state
.
storage
.
put
({
"
sessionId
"
: sessionId,
"
userId
"
: userId,
"
timestamp
"
: Date
.
now
()
});
delete (storage)
Input
Output
delete
(
key
:
string
)
:
Promise
<
boolean
>
delete
(
keys
:
string
[]
)
:
Promise
<
number
>
Promise
<
boolean
>
Promise
<
number
>
Deletes values from actor storage.
// Delete single key
const
deleted
= await
this
.
state
.
storage
.
delete
(
"
tempData
"
);
// Delete multiple keys
const
deletedCount
= await
this
.
state
.
storage
.
delete
([
"
cache1
"
,
"
cache2
"
]);
list (storage)
Input
Output
list
<
T
>(options
?:
{
start?: string;
startAfter
?:
string;
end
?:
string;
prefix
?:
string;
reverse
?:
boolean;
limit
?:
number;
}):
Promise
<
Map
<
string,
T
>>
Promise
<
Map
<
string,
T
>>
Lists values matching query options.
// List with prefix filter
const
sessions
= await
this
.
state
.
storage
.
list
(
{
prefix:
"
session:
"
,
limit:
10
}
);
// List in reverse order
const
recent
= await
this
.
state
.
storage
.
list
(
{
reverse:
true
,
limit:
5
}
);
setAlarm
Input
Output
setAlarm
(scheduledTime: number
|
Date):
Promise
<
void
>
Promise
<
void
>
Sets alarm to wake actor at specific time.
// Set alarm for 1 hour from now
const
wakeTime
=
Date
.
now
()
+
(
60
*
60
*
1000
);
await
this
.
state
.
storage
.
setAlarm
(wakeTime);
// Set alarm using Date object
const
tomorrow
=
new
Date
();
tomorrow
.
setDate
(tomorrow
.
getDate
()
+
1
);
await
this
.
state
.
storage
.
setAlarm
(tomorrow);
getAlarm
Input
Output
getAlarm
():
Promise
<
number
|
null
>
Promise
<
number
|
null
>
Gets current alarm time if set.
// Check if alarm is set
const
alarmTime
= await
this
.
state
.
storage
.
getAlarm
();
if
(alarmTime) {
console
.
log
(
`
Alarm set for
${
new
Date
(alarmTime)
}
`
);
}
deleteAlarm
Input
Output
deleteAlarm
():
Promise
<
void
>
Promise
<
void
>
Deletes currently set alarm.
// Cancel scheduled alarm
await
this
.
state
.
storage
.
deleteAlarm
();
waitUntil
Input
Output
waitUntil
(promise:
Promise
<
any
>
):
void
void
Registers promise that must complete before actor exits.
// Register background task
const
backgroundTask
=
this
.
processDataAsync
();
this
.
state
.
waitUntil
(backgroundTask);
blockConcurrencyWhile
Input
Output
blockConcurrencyWhile
<
T
>(callback:
()
=>
Promise
<
T
>
):
Promise
<
T
>
Promise
<
T
>
Blocks actor concurrency while executing function.
constructor
(state: ActorState, env: Env) {
super
(state, env);
// Initialize from storage without concurrency
this
.
state
.
blockConcurrencyWhile
(
async
()
=>
{
const
config
= await
this
.
state
.
storage
.
get
(
"
config
"
);
this
.
initializeFromConfig
(config);
});
}
Previous
Vector
Next
AI Models

AI Models
URL: https://docs.liquidmetal.ai/reference/ai/
AI Models
Raindrop provides access to a comprehensive suite of AI models through a unified interface that abstracts the complexity of working with different AI providers while maintaining type safety and performance. The AI system supports text generation, image processing, speech recognition, language translation, embeddings, and specialized capabilities like code generation and mathematical reasoning.
The framework handles model routing automatically, providing consistent interfaces across all model types. Each model has specific input and output types that ensure compile-time safety while supporting both simple one-shot operations and complex streaming workflows. Advanced models support tool calling for function execution and integration with external systems.
Key benefits:
Unified Interface
: Single
env.AI.run()
method for all model types
Type Safety
: Compile-time validation of model inputs and outputs
Tool Calling
: Function execution support for compatible models
Automatic Routing
: Seamless integration across multiple AI providers
Streaming Support
: Real-time response streaming for conversational applications
Advanced Options
: Request queuing, caching, and gateway configuration
Prerequisites
Active Raindrop project with AI binding configured
Understanding of TypeScript generics and async/await patterns
Familiarity with AI model concepts (LLMs, embeddings, vision models)
Basic knowledge of your target AI use cases and model requirements
Configuration
AI capabilities are automatically available to all Raindrop applications through the
env.AI
interface - no manifest configuration required.
application
"ai-app"
{
service
"api"
{
domain
=
"
api.example.com
"
# AI interface available as this.env.AI
}
}
Generate the service implementation:
Terminal window
raindrop
build
generate
The AI interface is available in your generated service class:
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
// AI interface available as this.env.AI
const
result
= await
this
.
env
.
AI
.
run
(
'
llama-3.3-70b
'
,
{
model:
'
llama-3.3-70b
'
,
messages:
[{ role:
"
user
"
, content:
"
Hello, AI!
"
}]
}
);
return
new
Response
(result
.
choices
[
0
]
.
message
.
content
);
}
}
Access
Access AI models through the
env.AI.run()
method with model-specific parameters:
// Basic text generation
const
response
= await
this
.
env
.
AI
.
run
(
'
llama-3.3-70b
'
,
{
model:
'
llama-3.3-70b
'
,
messages:
[
{ role:
"
user
"
, content:
"
Explain quantum computing
"
}
]
,
max_tokens:
150
}
);
// Generate embeddings
const
embeddings
= await
this
.
env
.
AI
.
run
(
'
embeddings
'
,
{
model:
'
embeddings
'
,
input:
"
Text to embed
"
}
);
// Process images with vision models
const
analysis
= await
this
.
env
.
AI
.
run
(
'
llava-1.5-7b
'
,
{
model:
'
llava-1.5-7b
'
,
messages:
[
{
role:
"
user
"
,
content: [
{ type:
"
text
"
, text:
"
Describe this image
"
},
{ type:
"
image_url
"
, image_url: { url: imageUrl } }
]
}
]
}
);
The interface automatically handles type checking and validates inputs based on the model selected.
Core Concepts
Model Routing System
Raindrop uses a sophisticated routing system that maps user-friendly model names to provider-specific endpoints. The framework automatically handles model discovery, routing, and response formatting to provide a consistent interface across all available models.
Type-Safe Interfaces
Each model has specific input and output type signatures that provide compile-time validation:
// TypeScript infers correct types automatically
const
llmResponse
= await
env
.
AI
.
run
(
'
llama-3.3-70b
'
, {
model:
'
llama-3.3-70b
'
,
messages:
[{ role:
"
user
"
, content:
"
Hello
"
}]
,
// ← Typed input
temperature:
0.7
}
);
// ← Returns typed LLM output
const
embedResponse
= await
env
.
AI
.
run
(
'
bge-large-en
'
, {
model:
'
bge-large-en
'
,
input:
[
"
text1
"
,
"
text2
"
]
// ← Typed embedding input
}
);
// ← Returns typed embedding output
Capability-Based Selection
Models are organized by capabilities to help you choose the right model for your use case:
Chat/Completion
: Conversational AI and text generation
Vision
: Image understanding and multimodal processing
Embeddings
: Text representation and semantic search
Audio
: Speech-to-text transcription
Specialized
: Code generation, mathematical reasoning, PII detection
Function Calling
Many chat models support function calling (tool calling), enabling AI models to execute specific functions and integrate with external systems. This allows models to access real-time data, perform calculations, and interact with APIs during conversations.
Standardized Model Interfaces
Raindrop provides standardized TypeScript interfaces for AI model capabilities, ensuring type safety and consistency across different model types.
Audio Processing
Used by:
whisper-large-v3
,
whisper
,
whisper-large-v3-turbo
,
whisper-tiny
,
nova-3
,
smart-turn-v2
Input
Output
interface
AudioInput {
audio
:
number
[]
|
ReadableStream
;
contentType
:
string
;
language
?:
string
;
response_format
?:
'
json
'
|
'
text
'
|
'
srt
'
|
'
vtt
'
;
}
interface
AudioOutput {
text
:
string
;
}
Vision Analysis
Used by:
llava-1.5-7b
,
uform-gen2-qwen-500m
Input
Output
interface
VisionInput {
messages
:
Array
<{
role
:
'
system
'
|
'
user
'
|
'
assistant
'
;
content
:
Array
<{
type
:
'
text
'
|
'
image_url
'
;
text
?:
string
;
image_url
?:
{
url
:
string
;
detail
?:
'
low
'
|
'
high
'
|
'
auto
'
;
};
}>;
}>;
model
:
string
;
max_tokens
?:
number
;
temperature
?:
number
;
}
interface
VisionOutput {
choices
:
Array
<{
message
:
{
role
:
'
assistant
'
;
content
:
string
;
};
finish_reason
?:
string
;
}>;
}
Text-to-Speech
Used by:
aura-1
,
melotts
Input
Output
interface
TTSInput {
text
:
string
;
voice
?:
string
;
speed
?:
number
;
response_format
?:
'
mp3
'
|
'
wav
'
|
'
ogg
'
;
}
interface
TTSOutput {
audio
:
ArrayBuffer
|
Uint8Array
;
response_format
?:
string
;
}
Image Generation
Used by:
flux-1-schnell
,
stable-diffusion-xl-base-1.0
,
phoenix-1.0
, etc.
Input
Output
interface
ImageGenerationInput {
prompt
:
string
;
negative_prompt
?:
string
;
width
?:
number
;
height
?:
number
;
steps
?:
number
;
guidance_scale
?:
number
;
}
interface
ImageGenerationOutput {
data
:
Array
<{
url
?:
string
;
b64_json
?:
string
;
}>;
}
Document Reranking
Used by:
bge-reranker-base
Input
Output
interface
RerankerInput {
query
:
string
;
documents
:
string
[];
top_k
?:
number
;
}
interface
RerankerOutput {
ranked_documents
:
Array
<{
index
:
number
;
document
:
string
;
relevance_score
:
number
;
}>;
}
Text Classification
Used by:
distilbert-sst-2-int8
Input
Output
interface
TextClassificationInput {
text
:
string
;
labels
?:
string
[];
}
interface
TextClassificationOutput {
label
:
string
;
score
:
number
;
}
Translation
Used by:
m2m100-1.2b
Input
Output
interface
TranslationInput {
text
:
string
;
source_language
?:
string
;
target_language
:
string
;
}
interface
TranslationOutput {
translation
:
string
;
source_lang
?:
string
;
target_lang
:
string
;
}
Summarization
Used by:
bart-large-cnn
Input
Output
interface
SummarizationInput {
text
:
string
;
max_length
?:
number
;
min_length
?:
number
;
}
interface
SummarizationOutput {
summary
:
string
;
}
Image Classification
Used by:
resnet-50
Input
Output
interface
ImageClassificationInput {
image
:
string
|
File
|
Blob
;
prompt
?:
string
;
}
interface
ImageClassificationOutput {
label
:
string
;
score
:
number
;
}
Chat Completion
Used by:
All chat models
Input
Output
interface
OpenAIChatInput {
messages
:
Array
<{
role
:
'
system
'
|
'
user
'
|
'
assistant
'
;
content
:
string
;
}>;
model
?:
string
;
temperature
?:
number
;
max_tokens
?:
number
;
tools
?:
Array
<{
type
:
'
function
'
;
function
:
{
name
:
string
;
description
?:
string
;
parameters
?:
Record
<
string
,
unknown
>;
};
}>;
tool_choice
?:
'
auto
'
|
'
required
'
|
'
none
'
;
}
interface
OpenAIChatOutput {
choices
:
Array
<{
message
:
{
role
:
'
assistant
'
;
content
:
string
;
};
finish_reason
?:
string
;
}>;
usage
?:
{
prompt_tokens
:
number
;
completion_tokens
:
number
;
total_tokens
:
number
;
};
}
Embeddings
Used by:
embeddings
,
bge-m3
,
bge-large-en
,
bge-base-en
,
bge-small-en
,
embeddinggemma-300m
Input
Output
type
EmbeddingInput
=
string
|
{ prompt
:
string
}
|
{ input
:
string
}
interface
OpenAIEmbeddingOutput {
data
:
Array
<{
embedding
:
number
[];
index
:
number
;
}>;
usage
?:
{
prompt_tokens
:
number
;
total_tokens
:
number
;
};
}
Interface Benefits
Type Safety
: Compile-time validation prevents runtime errors
Consistency
: Predictable patterns across model types and providers
Flexibility
: Automatic format conversion by the model router
Future-Proofing
: New models inherit appropriate interfaces automatically
Text Generation Models
Text generation models handle conversational AI, content creation, and language understanding tasks.
High-Performance Models
Advanced models for complex reasoning and long-context applications:
llama-3.3-70b
- Meta Llama 3.3 70B with advanced reasoning capabilities
deepseek-r1
- DeepSeek R1 with advanced chain-of-thought reasoning
deepseek-v3-0324
- DeepSeek V3 high-performance model with long context
kimi-k2
- Kimi K2 with tool integration capabilities
qwen-3-32b
- Qwen 3 32B with advanced multilingual capabilities
llama-4-maverick-17b
- Llama 4 Maverick 17B advanced model
gpt-oss-120b
- GPT OSS 120B with chain-of-thought capabilities
llama-3.1-70b-instruct
- Meta Llama 3.1 70B large language model
qwen-coder-32b
- Qwen 2.5 Coder 32B specialized for code generation
deepseek-r1-distill-qwen-32b
- DeepSeek R1 distilled model with JSON mode
qwen-qwq-32b
- QwQ 32B reasoning model capable of thinking and reasoning
mistral-small-3.1
- Mistral Small 3.1 with vision understanding and 128K context
gemma-3-12b
- Gemma 3 12B multimodal model with 128K context
llama-3.2-11b-vision
- Llama 3.2 11B with visual recognition capabilities
llama-4-scout-17b
- Meta Llama 4 Scout 17B multimodal model with MoE architecture
qwen-1.5-14b
- Qwen 1.5 14B with AWQ quantization
llama-3.3-70b-instruct-fp8
- Llama 3.3 70B quantized to FP8 for speed
Efficient Models
Optimized for speed and resource efficiency:
llama-3.1-8b-external
- Meta Llama 3.1 8B for efficient processing
llama-3.1-8b-instant
- Ultra-fast responses with Llama 3.1 8B
gemma-9b-it
- Google Gemma 9B instruction-tuned model
gpt-oss-20b
- GPT OSS 20B efficient reasoning model
llama-3.1-8b-instruct
- Fast and efficient general-purpose model
llama-3-8b-instruct
- Reliable model for general tasks
llama-3.2-3b-instruct
- Compact and efficient model
gemma-2b
- Lightweight model for basic tasks
llama-3.1-8b-instruct-fast
- Llama 3.1 8B optimized for speed
llama-3.1-8b-instruct-fp8
- Llama 3.1 8B quantized to FP8
llama-3.1-8b-instruct-awq
- Llama 3.1 8B with AWQ quantization
llama-3-8b-instruct-awq
- Llama 3 8B with AWQ quantization
llama-3.2-1b-instruct
- Ultra-compact 1B parameter model
gemma-7b
- Gemma 7B with LoRA adapter support
gemma-7b-it
- Gemma 7B instruction-tuned model
qwen-1.5-7b
- Qwen 1.5 7B with AWQ quantization
qwen-1.5-1.8b
- Qwen 1.5 1.8B lightweight model
qwen-1.5-0.5b
- Qwen 1.5 0.5B ultra-lightweight model
tinyllama-1.1b-chat-v1.0
- TinyLlama 1.1B chat model
Reasoning Models
Models specifically optimized for reasoning and problem-solving:
deepseek-r1-distill-llama-70b
- Fast reasoning with long context support
qwen-qwq-32b
- Reasoning model capable of thinking and reasoning
Code Generation Models
Models specialized for programming and code generation:
qwen-coder-32b
- Qwen 2.5 Coder 32B specialized for code generation
deepseek-coder-6.7b
- DeepSeek Coder 6.7B instruction-tuned for code
deepseek-coder-6.7b-base
- DeepSeek Coder 6.7B base model
sqlcoder-7b
- SQL code generation model for database queries
Mathematical Models
Models specialized for mathematical reasoning:
deepseek-math-7b
- DeepSeek Math 7B specialized for mathematical reasoning
Multilingual Models
Models optimized for specific languages or multilingual tasks:
llama-3.3-swallow-70b
- Japanese-optimized model
discolm-german-7b-v1-awq
- German language specialized model
Safety & Moderation Models
Models for content safety and moderation:
llama-guard-3-8b
- Content safety classification
llamaguard-7b-awq
- LLM prompt and response safety classification
Specialized Chat Models
Other specialized conversational models:
starling-lm-7b-beta
- Reinforcement learning trained model
neural-chat-7b-v3-1-awq
- Intel Gaudi optimized model
mistral-7b-instruct
- Mistral 7B instruction-tuned model
mistral-7b-instruct-v0.2
- Mistral 7B v0.2 with 32K context
mistral-7b-instruct-v0.2-lora
- Mistral 7B v0.2 with LoRA
mistral-7b-instruct-awq
- Mistral 7B with AWQ quantization
una-cybertron-7b-v2-bf16
- Cybertron 7B v2 unified alignment model
falcon-7b-instruct
- Falcon 7B instruction-tuned model
hermes-2-pro-mistral-7b
- Hermes 2 Pro with function calling support
openhermes-2.5-mistral-7b-awq
- OpenHermes 2.5 with code training
zephyr-7b-beta-awq
- Zephyr 7B with AWQ quantization
openchat-3.5
- OpenChat 3.5 with C-RLFT training
phi-2
- Microsoft Phi-2 transformer model
llama-4-scout-17b
- Meta Llama 4 Scout 17B multimodal model
Legacy Models
Older models maintained for compatibility:
llama-2-7b-chat-fp16
- Llama 2 7B full precision
llama-2-7b-chat-int8
- Llama 2 7B quantized
llama-2-7b-chat-hf-lora
- Llama 2 7B with LoRA support
llama-2-13b-chat-awq
- Llama 2 13B with AWQ quantization
Text Generation Usage
Basic Chat Completion:
const
response
= await
env
.
AI
.
run
(
'
llama-3.3-70b
'
, {
model:
'
llama-3.3-70b
'
,
messages:
[
{ role:
"
system
"
, content:
"
You are a helpful assistant.
"
},
{ role:
"
user
"
, content:
"
Write a haiku about coding
"
}
]
,
max_tokens:
100
,
temperature:
0.7
}
);
console
.
log
(response
.
choices
[
0
]
.
message
.
content
);
Streaming Responses:
const
stream
= await
env
.
AI
.
run
(
'
llama-3.1-8b-external
'
, {
model:
'
llama-3.1-8b-external
'
,
messages:
[{ role:
"
user
"
, content:
"
Tell me a story
"
}]
,
stream:
true
}
);
for
await
(
const
chunk
of
stream) {
process
.
stdout
.
write
(chunk
.
choices
[
0
]
?.
delta
?.
content
||
''
);
}
JSON Mode:
const
analysis
= await
env
.
AI
.
run
(
'
deepseek-r1-distill-llama-70b
'
, {
model:
'
deepseek-r1-distill-llama-70b
'
,
messages:
[
{ role:
"
user
"
, content:
"
Analyze this data and return structured JSON
"
}
]
,
response_format: { type:
"
json_object
"
}
}
);
Function Calling:
const
response
= await
env
.
AI
.
run
(
'
llama-3.3-70b
'
, {
model:
'
llama-3.3-70b
'
,
messages:
[
{ role:
"
user
"
, content:
"
What's the weather like in San Francisco?
"
}
]
,
tools:
[
{
type:
"
function
"
,
function: {
name:
"
get_weather
"
,
description:
"
Get the current weather for a location
"
,
parameters: {
type:
"
object
"
,
properties: {
location: {
type:
"
string
"
,
description:
"
The city and state, e.g. San Francisco, CA
"
},
unit: {
type:
"
string
"
,
enum: [
"
celsius
"
,
"
fahrenheit
"
],
description:
"
Temperature unit
"
}
},
required: [
"
location
"
]
}
}
}
]
,
tool_choice:
"
auto
"
}
);
// Handle tool calls in response
if
(response
.
choices
[
0
]
.
message
.
tool_calls
) {
const
toolCall
=
response
.
choices
[
0
]
.
message
.
tool_calls
[
0
];
if
(toolCall
.
function
.
name
===
"
get_weather
"
) {
const
args
=
JSON
.
parse
(toolCall
.
function
.
arguments
);
// Execute function and provide result back to model
}
}
Required Function Calling:
const
response
= await
env
.
AI
.
run
(
'
kimi-k2
'
, {
model:
'
kimi-k2
'
,
messages:
[
{ role:
"
user
"
, content:
"
Calculate the compound interest on $1000 for 5 years at 3% annual rate
"
}
]
,
tools:
[
{
type:
"
function
"
,
function: {
name:
"
calculate_compound_interest
"
,
description:
"
Calculate compound interest
"
,
parameters: {
type:
"
object
"
,
properties: {
principal: { type:
"
number
"
, description:
"
Initial investment amount
"
},
rate: { type:
"
number
"
, description:
"
Annual interest rate (as decimal)
"
},
time: { type:
"
number
"
, description:
"
Time period in years
"
},
frequency: { type:
"
number
"
, description:
"
Compounding frequency per year
"
, default:
1
}
},
required: [
"
principal
"
,
"
rate
"
,
"
time
"
]
}
}
}
]
,
tool_choice:
"
required
"
}
);
Vision Models
Vision models process and understand images alongside text for multimodal applications.
Available Vision Models
Vision-Language Models:
llava-1.5-7b
- LLaVA 1.5 7B vision-language model for image analysis
uform-gen2-qwen-500m
- Compact vision-language model for image captioning and VQA
Vision Model Usage
Image Description:
const
description
= await
env
.
AI
.
run
(
'
llava-1.5-7b
'
, {
model:
'
llava-1.5-7b
'
,
messages:
[{
role:
"
user
"
,
content: [
{ type:
"
text
"
, text:
"
What's in this image?
"
},
{
type:
"
image_url
"
,
image_url: {
url:
"
data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...
"
,
detail:
"
high
"
}
}
]
}]
,
max_tokens:
300
}
);
Image Analysis with Context:
const
analysis
= await
env
.
AI
.
run
(
'
llava-1.5-7b
'
, {
model:
'
llava-1.5-7b
'
,
messages:
[
{
role:
"
system
"
,
content:
"
You are an expert art critic. Analyze images in detail.
"
},
{
role:
"
user
"
,
content: [
{ type:
"
text
"
, text:
"
Analyze the artistic style and techniques
"
},
{ type:
"
image_url
"
, image_url: { url: imageUrl } }
]
}
]
,
temperature:
0.3
}
);
Embedding Models
Embedding models convert text into numerical vectors for semantic search, similarity comparison, and retrieval-augmented generation.
Available Embedding Models
High-Quality Embeddings:
embeddings
- Default embeddings model (BGE Large English v1.5)
bge-large-en
- BGE Large English 1024-dimensional embeddings
bge-base-en
- BGE Base English 768-dimensional embeddings
bge-small-en
- BGE Small English 384-dimensional embeddings
Multilingual Embeddings:
bge-m3
- Multi-lingual embeddings supporting 100+ languages
embeddinggemma-300m
- Gemma 3-based 300M parameter embedding model
Specialized:
pii-detection
- PII Detection service for identifying personally identifiable information
Embedding Usage
Single Text Embedding:
const
embedding
= await
env
.
AI
.
run
(
'
embeddings
'
, {
model:
'
embeddings
'
,
input:
"
Natural language processing with embeddings
"
}
);
const
vector
=
embedding
.
data
[
0
]
.
embedding
;
Batch Text Embedding:
const
embeddings
= await
env
.
AI
.
run
(
'
embeddings
'
, {
model:
'
embeddings
'
,
input:
[
"
First document text
"
,
"
Second document text
"
,
"
Third document text
"
]
}
);
embeddings
.
data
.
forEach
(
(
item
,
index
)
=>
{
console
.
log
(
`
Document
${
index
}
:
${
item
.
embedding
.
length
}
dimensions
`
);
});
Multilingual Embedding:
const
multilingualEmbedding
= await
env
.
AI
.
run
(
'
bge-m3
'
, {
model:
'
bge-m3
'
,
input:
[
"
Hello world
"
,
"
Hola mundo
"
,
"
Bonjour le monde
"
]
}
);
Audio Models
Audio models provide speech-to-text transcription with support for multiple languages and output formats.
Available Audio Models
Speech Recognition:
whisper-large-v3
- Advanced speech-to-text transcription
whisper
- General-purpose speech recognition model
whisper-large-v3-turbo
- Faster, more accurate speech-to-text
whisper-tiny
- Lightweight English-only speech recognition
nova-3
- Deepgram’s speech-to-text model
smart-turn-v2
- Audio turn detection model
Audio Usage
Basic Transcription:
// Audio file from request
const
audioFile
= await
request
.
blob
();
const
audioBuffer
= await
audioFile
.
arrayBuffer
();
const
transcription
= await
env
.
AI
.
run
(
'
whisper
'
, {
audio:
Array
.
from
(
new
Uint8Array
(audioBuffer))
,
contentType:
'
audio/mpeg
'
,
response_format:
'
text
'
}
);
console
.
log
(transcription
.
text
);
Text-to-Speech Models
Text-to-speech models convert written text into natural-sounding speech audio.
Available TTS Models
High-Quality TTS:
aura-1
- Context-aware TTS with natural pacing and expressiveness
melotts
- High-quality multi-lingual text-to-speech
TTS Usage
Basic Text-to-Speech:
const
speech
= await
env
.
AI
.
run
(
'
aura-1
'
, {
model:
'
aura-1
'
,
text:
"
Hello, this is a text-to-speech example.
"
,
voice:
"
default
"
,
response_format:
"
mp3
"
}
);
const
audioBuffer
=
speech
.
audio
;
Multi-language TTS:
const
speech
= await
env
.
AI
.
run
(
'
melotts
'
, {
model:
'
melotts
'
,
text:
"
Bonjour le monde
"
,
voice:
"
french
"
,
speed:
1.0
}
);
Image Generation Models
Image generation models create images from text descriptions using diffusion techniques.
Available Image Generation Models
Advanced Generation:
flux-1-schnell
- FLUX.1 12B parameter model for high-quality image generation
stable-diffusion-xl-base-1.0
- SDXL base model for high-resolution images
stable-diffusion-xl-lightning
- SDXL Lightning for fast generation
phoenix-1.0
- Leonardo.AI model with exceptional prompt adherence
lucid-origin
- Leonardo.AI’s most adaptable and prompt-responsive model
Specialized Generation:
stable-diffusion-v1-5-inpainting
- Stable Diffusion with inpainting capability
stable-diffusion-v1-5-img2img
- Generate images from input images
dreamshaper-8-lcm
- Fine-tuned for photorealism
Image Generation Usage
Basic Image Generation:
const
image
= await
env
.
AI
.
run
(
'
flux-1-schnell
'
, {
prompt:
"
A serene mountain landscape at sunset
"
,
width:
1024
,
height:
1024
}
);
const
imageData
=
image
.
data
[
0
]
.
url
||
image
.
data
[
0
]
.
b64_json
;
Advanced Image Generation:
const
image
= await
env
.
AI
.
run
(
'
phoenix-1.0
'
, {
prompt:
"
Professional headshot of a businesswoman, studio lighting
"
,
negative_prompt:
"
blurry, low quality, distorted
"
,
guidance_scale:
7.5
,
steps:
20
}
);
Image Inpainting:
const
inpaintedImage
= await
env
.
AI
.
run
(
'
stable-diffusion-v1-5-inpainting
'
, {
prompt:
"
A red car in the driveway
"
,
image:
originalImageBlob
,
mask:
maskImageBlob
}
);
Text Classification Models
Text classification models categorize and analyze text content.
Available Text Classification Models
Sentiment Analysis:
distilbert-sst-2-int8
- Sentiment classification (positive/negative)
Document Ranking:
bge-reranker-base
- Document relevance ranking and scoring
Text Classification Usage
Sentiment Analysis:
const
sentiment
= await
env
.
AI
.
run
(
'
distilbert-sst-2-int8
'
, {
text:
"
This product is amazing and works perfectly!
"
}
);
console
.
log
(sentiment
.
label
);
// "POSITIVE"
console
.
log
(sentiment
.
score
);
// 0.98
Document Reranking:
const
rankings
= await
env
.
AI
.
run
(
'
bge-reranker-base
'
, {
query:
"
machine learning algorithms
"
,
documents:
[
"
Neural networks and deep learning techniques
"
,
"
Traditional statistical methods
"
,
"
Computer vision applications
"
]
,
top_k:
3
}
);
rankings
.
ranked_documents
.
forEach
(
doc
=>
{
console
.
log
(
`
Score:
${
doc
.
relevance_score
}
-
${
doc
.
document
}
`
);
});
Image Classification Models
Image classification models identify and categorize objects within images.
Available Image Classification Models
Object Recognition:
resnet-50
- 50-layer CNN trained on ImageNet for object classification
Image Classification Usage
Basic Image Classification:
const
classification
= await
env
.
AI
.
run
(
'
resnet-50
'
, {
image:
imageBlob
}
);
console
.
log
(classification
.
label
);
// "golden_retriever"
console
.
log
(classification
.
score
);
// 0.95
Translation Models
Translation models convert text between different languages.
Available Translation Models
Multilingual Translation:
m2m100-1.2b
- Many-to-many multilingual translation model
Translation Usage
Basic Translation:
const
translation
= await
env
.
AI
.
run
(
'
m2m100-1.2b
'
, {
text:
"
Hello, how are you today?
"
,
source_language:
"
en
"
,
target_language:
"
es
"
}
);
console
.
log
(translation
.
translation
);
Summarization Models
Summarization models create concise summaries of longer text content.
Available Summarization Models
Extractive Summarization:
bart-large-cnn
- BART model fine-tuned for text summarization
Summarization Usage
Text Summarization:
const
summary
= await
env
.
AI
.
run
(
'
bart-large-cnn
'
, {
text:
"
Very long article text here...
"
,
max_length:
150
,
min_length:
50
}
);
console
.
log
(summary
.
summary
);
PII Detection Models
Personally Identifiable Information (PII) detection models identify sensitive data in text.
Available PII Detection Models
PII Identification:
pii-detection
- Identifies personally identifiable information in text
PII Detection Usage
Basic PII Detection:
const
piiResult
= await
env
.
AI
.
run
(
'
pii-detection
'
, {
prompt:
"
My name is John Doe and my email is john@example.com. My SSN is 123-45-6789.
"
}
);
piiResult
.
pii_detection
.
forEach
(
entity
=>
{
console
.
log
(
`
${
entity
.
entity_type
}
:
${
entity
.
text
}
(confidence:
${
entity
.
confidence
}
)
`
);
});
Previous
Actors
Next
Annotations

Annotation
URL: https://docs.liquidmetal.ai/reference/annotations/
Annotation
The Raindrop annotation interface provides structured metadata storage using Machine-Readable Name (MRN) objects for addressing. This system acts as a key-value store designed for application metadata with hierarchical organization and automatic versioning. You can use annotations as a breadcrumb system to leave small hints and context about implementation decisions, bug fixes, and other metadata. Future AI coding assistants examining the deployed application can discover and use these breadcrumbs to understand previous changes.
Annotations store arbitrary data up to 64MB per entry. They support multiple data types including strings, binary data, and structured objects. The MRN addressing system enables precise targeting of metadata to specific application components, modules, or individual items.
Creating
Annotations are automatically available in all Raindrop applications without additional configuration. Access through the
env.annotation
interface:
export
default
{
async
fetch
(
request
:
Request
,
env
:
Env
)
:
Promise
<
Response
> {
// Annotation interface available on env.annotation
const
metadata
= await
env
.
annotation
.
get
(mrn);
return
new
Response
(
'
OK
'
);
}
};
Accessing
Use the annotation interface through environment bindings to store and retrieve metadata:
// Store debugging context for AI assistant
const
debugMRN
= {
module:
'
auth
'
,
item:
'
login-handler
'
,
key:
'
fix-context
'
}
;
await
env
.
annotation
.
put
(debugMRN,
JSON
.
stringify
({
issue:
'
JWT token validation failing
'
,
solution:
'
Updated key rotation logic
'
,
timestamp:
new
Date
()
.
toISOString
()
}));
// Retrieve context later
const
context
= await
env
.
annotation
.
get
(debugMRN);
if
(context) {
const
data
=
JSON
.
parse
(
await
context
.
text
());
console
.
log
(
`
Previous fix:
${
data
.
solution
}
`
);
}
Core Concepts
Main Interfaces
get()
- Retrieve annotation data by MRN
put()
- Store annotation with automatic revision management
list()
- Query annotations with prefix filtering
MRN Object Structure
Machine-Readable Name objects provide hierarchical addressing for annotations:
// Complete MRN with all optional fields
const
fullMRN
:
MRNObject
= {
type:
'
annotation
'
,
// Resource type (annotation or label)
applicationName:
'
my-app
'
,
// Application identifier
versionId:
'
v1.0.0
'
,
// Version identifier
module:
'
user-service
'
,
// Optional module name
item:
'
auth-handler
'
,
// Optional item identifier
key:
'
config
'
,
// Optional key name
revision:
'
rev123
'
// Optional revision (read-only for get)
}
;
Bucket Object Body
Response object for retrieved annotations with data access methods:
// Annotation data wrapper with multiple access patterns
interface
BucketObjectBody {
readonly
key
:
string
;
// Storage key
readonly
version
:
string
;
// Object version
readonly
size
:
number
;
// Data size in bytes
readonly
etag
:
string
;
// Entity tag
readonly
uploaded
:
Date
;
// Upload timestamp
get
body
()
:
ReadableStream
;
// Raw data stream
text
()
:
Promise
<
string
>;
// Text content
json
<
T
>
()
:
Promise
<
T
>;
// JSON parsed content
arrayBuffer
()
:
Promise
<
ArrayBuffer
>;
// Binary content
blob
()
:
Promise
<
Blob
>;
// Blob representation
}
System Limits
Maximum annotation size: 64MB per entry
Hierarchical addressing through MRN structure
Automatic revision management prevents conflicts
get
Input
Output
get
(mrn: MRNObject):
Promise
<
BucketObjectBody
|
null
>
// Returns annotation data or null if not found
{
key: string;
version: string;
size: number;
body: ReadableStream;
text
():
Promise
<
string
>
;
json
<
T
>():
Promise
<
T
>
;
// ... other properties
}
|
null
Example
Retrieve stored annotation metadata by MRN address:
const
mrn
= {
module:
'
payment
'
,
item:
'
stripe-webhook
'
,
key:
'
error-patterns
'
}
;
// Get annotation data
const
annotation
= await
env
.
annotation
.
get
(mrn);
if
(annotation) {
const
errorData
= await
annotation
.
json
();
console
.
log
(
`
Found
${
errorData
.
patterns
.
length
}
error patterns
`
);
}
put
Input
Output
put
(
mrn: MRNObject,
data: ReadableStream
|
ArrayBuffer
|
string
|
Blob
|
null
,
options
?:
BucketPutOptions
):
Promise
<
BucketObject
>
// Returns stored object metadata
{
key: string;
version: string;
size: number;
etag: string;
uploaded: Date;
storageClass: string;
// ... other properties
}
Example
Store annotation data with automatic revision management:
const
mrn
= {
module:
'
api
'
,
item:
'
rate-limiter
'
,
key:
'
optimization-notes
'
}
;
// Store optimization context
const
metadata
= {
changes:
'
Increased burst limit for premium users
'
,
performance:
'
50ms avg response improvement
'
,
date:
new
Date
()
.
toISOString
()
}
;
const
result
= await
env
.
annotation
.
put
(mrn
,
JSON
.
stringify
(metadata));
console
.
log
(
`
Stored annotation:
${
result
.
key
}
(
${
result
.
size
}
bytes)
`
);
list
Input
Output
list
(options
?:
BucketListOptions):
Promise
<
BucketObjects
>
// Returns list of matching annotations
{
objects: BucketObject[];
delimitedPrefixes: string[];
truncated: boolean;
cursor
?:
string;
// If truncated
}
Example
Query annotations with prefix filtering for discovery:
// List all authentication-related annotations
const
authAnnotations
= await
env
.
annotation
.
list
(
{
prefix:
'
annotation:my-app:v1.0.0:auth
'
,
limit:
50
}
);
// Process results
for
(
const
obj
of
authAnnotations
.
objects
) {
console
.
log
(
`
Found annotation:
${
obj
.
key
}
(
${
obj
.
size
}
bytes)
`
);
}
// Handle pagination if needed
if
(authAnnotations
.
truncated
) {
const
nextPage
= await
env
.
annotation
.
list
(
{
prefix:
'
annotation:my-app:v1.0.0:auth
'
,
cursor:
authAnnotations
.
cursor
,
limit:
50
}
);
}
Previous
AI Models
Next
Overview

Architecture Patterns
URL: https://docs.liquidmetal.ai/reference/architecture-patterns/
Architecture Patterns
Architecture patterns provide proven solutions to common application challenges using Raindrop framework components. Each pattern combines multiple components to solve specific problems with clear guidance on implementation and best practices.
Available Patterns
AI Agent
Build conversational agents with persistent memory, tool calling capabilities, and structured decision-making workflows.
View Pattern →
API Gateway
Create unified API endpoints that route requests to multiple backend services with authentication, rate limiting, and monitoring.
View Pattern →
Background Job Processing
Process long-running tasks asynchronously with reliable queue-based architecture and automatic retry mechanisms.
View Pattern →
Multi-Agentic System
Coordinate multiple AI agents working together on complex tasks with shared state management and inter-agent communication.
View Pattern →
Retrieval Augmented Generation
Enhance AI responses with relevant context from document collections using semantic search and intelligent retrieval.
View Pattern →
Using Architecture Patterns
Each pattern includes:
Overview
- Problem solved and when to use the pattern
Architecture Diagram
- Visual representation of component relationships
Components
- List of required Raindrop framework resources
Logical Flow
- Step-by-step process breakdown
Implementation
- High-level setup and deployment guidance
Best Practices
- Key recommendations and common pitfalls
Pattern Structure
Architecture patterns are designed for reusability and combine multiple Raindrop components:
Actors
- Stateful compute with persistent data
Services
- HTTP request handlers
SmartMemory
- AI agent memory systems
SmartBucket
- Document storage with semantic search
AI Models
- Language models and embeddings
Queues
- Asynchronous message processing
Observers
- Event-driven reactive components
Choose patterns based on your application requirements and combine them as needed for complex systems.
Previous
Annotations
Next
AI Agent

AI Agent
URL: https://docs.liquidmetal.ai/reference/architecture-patterns/ai-agent/
AI Agent
The AI Agent pattern builds intelligent, memory-enhanced conversational systems that learn, adapt, and maintain context across interactions. This pattern combines large language model reasoning with persistent memory capabilities to create agents that improve over time through accumulated knowledge and experience.
Use this pattern when building:
Personal assistants with long-term memory
Domain-specific expert systems
Customer support agents that learn from interactions
Research assistants that build knowledge over time
Training or educational systems with personalized guidance
Architecture Diagram
flowchart TB
User[User Input]
ServiceEntry[Service Entry Point]
User --> ServiceEntry
subgraph Memory ["Memory Retrieval"]
SmartMemory[SmartMemory]
Procedural["Procedural Memory<br/>System Prompts"]
Episodic["Episodic Memory<br/>Past Interactions"]
Semantic["Semantic Memory<br/>Domain Knowledge"]
Working["Working Memory<br/>Session Context"]
ServiceEntry --> SmartMemory
SmartMemory --> Procedural
SmartMemory --> Episodic
SmartMemory --> Semantic
SmartMemory --> Working
end
subgraph Processing ["AI Processing"]
AI["AI Model 70b+"]
Procedural --> AI
Episodic --> AI
Semantic --> AI
Working --> AI
ServiceEntry --> AI
end
subgraph Response ["Response & Learning"]
GeneratedResponse[Generated Response]
Learning[Learning Updates]
AI --> GeneratedResponse
AI --> Learning
Learning --> SmartMemory
GeneratedResponse --> ServiceEntry
end
ServiceEntry --> User
Components
AI
- Large language model (70b+ recommended) for reasoning and response generation
SmartMemory
- Four-layer memory system enabling learning and context maintenance
Service
- Orchestration layer managing user interactions and memory coordination
Logical Flow
Context Assembly
- Service retrieves relevant context from SmartMemory subsystems (procedural prompts, episodic history, semantic knowledge)
Enhanced Prompt Construction
- Service combines user input with retrieved memory context for rich, contextual prompts
AI Processing
- AI model processes enhanced prompt using current input and historical context for advanced reasoning
Response Generation
- AI generates responses reflecting immediate needs and accumulated understanding
Memory Updates
- Service updates SmartMemory with interaction outcomes across all memory types
Continuous Learning
- Each interaction contributes to growing intelligence through systematic memory updates
Implementation
Deploy Service Component
- Configure orchestration service with session management and memory integration
Configure AI Model
- Select 70b+ parameter model with appropriate context windows and response parameters
Initialize SmartMemory
- Set up memory subsystems with initial procedural prompts and seed knowledge
Define Agent Behavior
- Populate procedural memory with system prompts defining personality and interaction patterns
Production Setup
- Add authentication, monitoring, and external knowledge source integration for production deployments
raindrop.manifest
Basic Agent
Advanced Agent
raindrop.manifest
application
"ai-agent"
{
service
"agent_service"
{
}
ai
"reasoning_engine"
{
}
smartMemory
"agent_memory"
{
}
}
raindrop.manifest
application
"advanced-ai-agent"
{
service
"agent_service"
{
}
ai
"reasoning_engine"
{
}
ai
"analysis_engine"
{
}
smartMemory
"agent_memory"
{
}
observer
"agent_monitor"
{
}
}
Best Practices
Use procedural memory consistently
- Store stable system prompts, personality definitions, and behavioral guidelines
Use episodic learning
- Regularly flush working memory to episodic storage for long-term pattern learning
Organize semantic knowledge
- Structure domain knowledge hierarchically for efficient retrieval
Monitor memory growth
- Implement retention policies and cleanup to maintain performance
Choose appropriate model size
- Use 70b+ models for advanced reasoning capabilities
Tune temperature carefully
- Lower values (0.3-0.5) ensure consistency while allowing adaptability
Optimize context usage
- Balance memory context inclusion with available context window
Implement session caching
- Cache frequently accessed memory contexts to reduce latency
Use async memory updates
- Update memory stores asynchronously to minimize user-facing latency
Previous
Overview
Next
API Gateway

API Gateway/Backend for Frontend
URL: https://docs.liquidmetal.ai/reference/architecture-patterns/api-gateway/
API Gateway/Backend for Frontend
The API Gateway pattern creates a centralized service layer that acts as a single entry point for client applications while coordinating access to multiple backend services. This pattern provides unified API interfaces, handles cross-cutting concerns, and simplifies client integration.
Use this pattern when building:
Multi-client applications (web, mobile, third-party integrations)
Microservice architectures requiring unified interfaces
Systems needing centralized authentication and rate limiting
Applications requiring response aggregation and transformation
APIs requiring monitoring and analytics across multiple services
Architecture Diagram
flowchart TB
Client1[Web Client]
Client2[Mobile App]
Client3[Third Party]
Gateway[API Gateway Service]
Client1 --> Gateway
Client2 --> Gateway
Client3 --> Gateway
subgraph GatewayProcessing ["Gateway Processing"]
Gateway --> Auth["Authentication<br/>SQL Database/KV Cache"]
Gateway --> Rate["Rate Limiting<br/>Observer"]
Gateway --> Route[Request Routing]
Gateway --> Cache["Response Cache<br/>KV Cache"]
end
subgraph Backend ["Backend Services"]
Route --> Service1[User Service]
Route --> Service2[Order Service]
Route --> Service3[Payment Service]
Route --> ServiceN[Other Services]
end
subgraph CrossCutting ["Cross-Cutting Concerns"]
Observer[Observer] --> Metrics[Metrics Collection]
Observer --> Logs["Request/Response Logs"]
Observer --> Alerts[Rate Limit Alerts]
SqlDb[SQL Database] --> UserAuth[User Authentication]
SqlDb --> APIKeys[API Key Management]
KvCache[KV Cache] --> SessionCache[Session Cache]
KvCache --> ResponseCache[Response Cache]
end
Gateway --> AggregatedResponse[Aggregated Response]
AggregatedResponse --> Client1
AggregatedResponse --> Client2
AggregatedResponse --> Client3
Components
Service
- Central orchestration component handling routing, transformation, and aggregation
KV Cache
- High-performance caching for sessions, responses, and rate limiting counters
Observer
- Monitoring, rate limiting, and performance tracking across the gateway
SQL Database
- Persistent storage for authentication, API keys, and configuration data
Logical Flow
Request Reception
- Client applications send requests to gateway Service as single entry point
Authentication & Authorization
- Service validates requests using SQL Database or cached tokens in KV Cache
Rate Limiting
- Observer enforces rate limiting policies based on client identity and API keys
Route Resolution
- Service analyzes request paths and headers to determine required backend services
Cache Check
- Service checks KV Cache for cached responses before making backend calls
Backend Orchestration
- Service coordinates calls to backend services with circuit breaker patterns
Response Aggregation
- Service combines and transforms responses from multiple backend services
Caching & Response
- Processed responses stored in KV Cache and returned to clients with proper formatting
Implementation
Deploy Gateway Service
- Configure main Service with routing rules, authentication middleware, and transformation logic
Configure Authentication
- Set up SQL Database with user tables and API key management
Implement Caching
- Configure KV Cache with appropriate TTL policies for responses and sessions
Set Up Monitoring
- Deploy Observer with metrics collection, rate limiting rules, and alerting
Production Setup
- Add SSL termination, load balancing, backup authentication, and service discovery integration
raindrop.manifest
Basic Gateway
Enterprise Gateway
raindrop.manifest
application
"api_gateway"
{
service
"gateway"
{
}
kv_cache
"cache_store"
{
}
kv_cache
"session_store"
{
}
sql_database
"auth_db"
{
}
observer
"gateway_monitor"
{
}
}
raindrop.manifest
application
"enterprise_api_gateway"
{
service
"gateway"
{
}
service
"admin_gateway"
{
}
kv_cache
"response_cache"
{
}
kv_cache
"session_cache"
{
}
kv_cache
"config_cache"
{
}
sql_database
"auth_database"
{
}
sql_database
"audit_database"
{
}
observer
"gateway_observer"
{
}
}
Best Practices
Implement multiple authentication methods
- Support API keys, JWT tokens, and OAuth for different client types
Use secure token storage
- Cache authentication tokens securely with appropriate expiration policies
Validate all inputs
- Implement complete request validation and sanitization at gateway level
Monitor security events
- Track authentication failures and suspicious access patterns
Cache strategically
- Cache frequently accessed, static data while avoiding user-specific information
Implement cache invalidation
- Design cache keys and invalidation strategies for data consistency
Use appropriate TTLs
- Set cache expiration based on data volatility and business requirements
Implement circuit breakers
- Prevent cascading failures by isolating failing backend services
Use connection pooling
- Maintain persistent connections to reduce connection overhead
Optimize request routing
- Design routing logic to minimize latency and distribute load effectively
Provide meaningful error responses
- Transform backend errors into consistent, client-friendly messages
Implement retry logic
- Use exponential backoff for transient failures while avoiding retry storms
Previous
AI Agent
Next
Background Job Processing

Background Job Processing
URL: https://docs.liquidmetal.ai/reference/architecture-patterns/background-job-processing/
Background Job Processing
The Background Job Processing pattern handles asynchronous, long-running, or resource-intensive work without blocking user-facing operations. This pattern separates immediate response requirements from time-consuming processing, enabling applications to maintain responsiveness while handling complex operations in the background.
Use this pattern when building:
Data processing pipelines and batch operations
Email/notification sending systems
Report generation and analytics processing
Integration with external systems and APIs
Scheduled tasks and maintenance operations
Image/video processing workflows
Architecture Diagram
flowchart TB
Client[Client Request]
ServiceAPI[Service API]
Client --> ServiceAPI
subgraph Submission ["Job Submission"]
ServiceAPI --> Validate[Input Validation]
Validate --> Queue[Queue]
ServiceAPI --> KvCache["KV Cache<br/>Job Status"]
ServiceAPI --> JobID[Return Job ID]
end
subgraph JobProcessing ["Job Processing"]
Queue --> Task1[Task Worker 1]
Queue --> Task2[Task Worker 2]
Queue --> TaskN[Task Worker N]
Task1 --> Processing[Job Processing]
Task2 --> Processing
TaskN --> Processing
end
subgraph Monitoring ["Monitoring & Recovery"]
Observer[Observer] --> Queue
Observer --> KvCache
Observer --> DeadLetter[Dead Letter Queue]
Processing --> Observer
Processing --> KvCache
end
subgraph Status ["Status & Results"]
KvCache --> StatusAPI[Status API]
Processing --> Results[Job Results]
Results --> KvCache
StatusAPI --> Client
end
JobID --> Client
Components
Queue
- Central job distribution with durability, priority handling, and automatic retry mechanisms
Task
- Background processing workers that pull jobs and execute work with fault tolerance
Observer
- Monitoring component tracking processing metrics, failure patterns, and system health
Service
- API gateway handling job submission, validation, and status queries
KV Cache
- Fast storage for job metadata, status tracking, and result caching
Logical Flow
Job Submission
- Clients submit work requests to Service API which validates parameters and business rules
Queue Insertion
- Validated jobs inserted into Queue with priority, metadata, and processing requirements
Job Distribution
- Task workers pull jobs from Queue based on capacity and configured job types
Background Processing
- Task workers execute job logic, updating progress in KV Cache and handling errors
Status Tracking
- Observer monitors progress and updates status; failed jobs retried or moved to dead letter queues
Result Storage
- Completed jobs store results in KV Cache with configurable retention policies
Status API
- Clients query job status and retrieve results through Service endpoints with real-time updates
Implementation
Configure Queue
- Deploy Queue with appropriate throughput settings, durability guarantees, and retry policies
Deploy Task Workers
- Create Task components configured for specific job types with resource limits and error handling
Set Up Monitoring
- Configure Observer to track key metrics and provide alerts for failures and performance issues
Implement Service API
- Create endpoints for job submission, status queries, and result retrieval
Production Setup
- Add authentication, rate limiting, job prioritization, resource quotas, and external monitoring integration
raindrop.manifest
Basic Processing
High-Throughput Processing
raindrop.manifest
application
"background_processor"
{
service
"job_api"
{
}
queue
"job_queue"
{
}
task
"job_worker"
{
}
kv_cache
"job_status"
{
}
observer
"job_monitor"
{
}
}
raindrop.manifest
application
"high_throughput_processor"
{
service
"job_api"
{
}
queue
"job_queue"
{
}
task
"job_worker"
{
}
task
"heavy_worker"
{
}
kv_cache
"job_status"
{
}
kv_cache
"job_results"
{
}
observer
"job_monitor"
{
}
}
Best Practices
Make jobs idempotent
- Design jobs to produce same results when run multiple times for safe retries
Keep jobs focused
- Break large operations into smaller, manageable jobs that can be processed independently
Include sufficient context
- Ensure job payloads contain all necessary information without external dependencies
Set appropriate timeouts
- Configure realistic timeout values with buffer for processing variability
Implement complete retry logic
- Use exponential backoff and maximum retry limits for transient failures
Design dead letter processing
- Create workflows for investigating and resolving permanently failed jobs
Log detailed error information
- Capture sufficient debug context without exposing sensitive information
Right-size worker resources
- Allocate CPU and memory based on actual job requirements and performance
Implement auto-scaling
- Configure scaling policies based on queue depth and processing metrics
Use batch processing
- Process multiple related jobs together to reduce overhead when appropriate
Track key metrics
- Monitor queue depth, processing rates, error rates, and worker health continuously
Set meaningful alerts
- Configure alerts for conditions requiring intervention while avoiding false positives
Previous
API Gateway
Next
Multi-Agentic System

Multi-Agentic System
URL: https://docs.liquidmetal.ai/reference/architecture-patterns/multi-agentic-system/
Multi-Agentic System
The Multi-Agentic System pattern coordinates multiple specialized AI agents working together on complex tasks through shared memory and orchestrated workflows. This pattern uses collective intelligence where agents dynamically assume roles based on task requirements and learn from collaborative experiences.
Use this pattern when building:
Research and analysis workflows needing diverse expertise
Content creation pipelines with multiple review stages
Software development assistance with specialized roles
Complex decision-making processes spanning knowledge domains
Quality assurance systems with multiple validation perspectives
Multi-step problem-solving requiring specialized knowledge
Architecture Diagram
flowchart TB
User[Complex Task Input]
OrchService[Orchestration Service]
User --> OrchService
subgraph Orchestration ["Orchestration Layer"]
OrchestratorAI["Orchestrator AI 70b+<br/>Task Planning & Coordination"]
TaskDecomp[Task Decomposition]
Validation[Result Validation]
OrchService --> OrchestratorAI
OrchestratorAI --> TaskDecomp
OrchestratorAI --> Validation
end
subgraph Specialists ["Specialist Agents"]
SpecialistService1["Specialist Service<br/>Dynamic Prompting"]
SpecialistService2["Specialist Service<br/>Dynamic Prompting"]
SpecialistServiceN["Specialist Service<br/>Dynamic Prompting"]
SpecialistAI1["Specialist AI<br/>Configured Role"]
SpecialistAI2["Specialist AI<br/>Configured Role"]
SpecialistAIN["Specialist AI<br/>Configured Role"]
TaskDecomp --> SpecialistService1
TaskDecomp --> SpecialistService2
TaskDecomp --> SpecialistServiceN
SpecialistService1 --> SpecialistAI1
SpecialistService2 --> SpecialistAI2
SpecialistServiceN --> SpecialistAIN
end
subgraph Memory ["Shared Memory System"]
SmartMemory[SmartMemory]
Procedural["Procedural Memory<br/>Prompts & Protocols"]
Episodic["Episodic Memory<br/>Workflow Learning"]
Semantic["Semantic Memory<br/>Domain Knowledge"]
Working["Working Memory<br/>Active Coordination"]
SmartMemory --> Procedural
SmartMemory --> Episodic
SmartMemory --> Semantic
SmartMemory --> Working
end
subgraph Communication ["Communication Layer"]
Shared[Shared Utilities]
TaskProtocols[Task Protocols]
ResultAggregation[Result Aggregation]
PromptGeneration[Dynamic Prompts]
Shared --> TaskProtocols
Shared --> ResultAggregation
Shared --> PromptGeneration
end
OrchestratorAI <--> SmartMemory
SpecialistAI1 <--> SmartMemory
SpecialistAI2 <--> SmartMemory
SpecialistAIN <--> SmartMemory
Validation --> OrchService
OrchService --> User
Components
AI
(Orchestrator) - Large AI model (70b+ recommended) for task analysis, decomposition, planning, and validation
Service
/
AI
(Specialist Pairing) - Configurable components that dynamically assume specialist roles through prompt injection
SmartMemory
(Shared) - Centralized memory system enabling collaboration, learning, and context sharing
Shared
- Common utilities for task serialization, result aggregation, and agent communication protocols
Logical Flow
Task Reception & Analysis
- Orchestration Service receives complex tasks and routes to orchestrator AI for requirements analysis
Strategic Decomposition
- Orchestrator AI analyzes complexity and decomposes work into specialized subtasks
Agent Coordination
- Orchestrator determines specialist configurations and coordinates task distribution through dynamic prompting
Specialist Execution
- Service/AI pairings receive dynamically generated role prompts and execute assigned subtasks
Progress Monitoring
- Orchestrator monitors specialist progress through SmartMemory, identifying dependencies and bottlenecks
Validation & Integration
- Orchestrator validates specialist outputs against criteria and coordinates revisions
Result Synthesis
- Orchestrator combines validated outputs into cohesive final results with consistency checks
Collective Learning
- All interactions and patterns stored in SmartMemory for system-wide learning and optimization
Implementation
Deploy Orchestration Service
- Configure main Service with orchestrator AI integration and task management
Configure Orchestrator AI
- Select and tune large model (70b+) with strong planning and validation capabilities
Deploy Specialist Services
- Create configurable Service/AI pairings with dynamic prompt injection capabilities
Initialize SmartMemory
- Set up shared memory with procedural templates, protocols, and domain knowledge
Implement Shared Utilities
- Develop common functions for task serialization, result aggregation, and prompt generation
Production Setup
- Add performance monitoring, workload balancing, failure recovery, and external knowledge integration
raindrop.manifest
Basic Multi-Agent
Enterprise Multi-Agent
raindrop.manifest
application
"multi-agent-system"
{
service
"orchestrator"
{
}
service
"specialist-pool"
{
}
ai
"orchestrator-brain"
{
}
ai
"specialist-brain"
{
}
smartMemory
"collective-memory"
{
}
sql_database
"coordination-db"
{
}
}
raindrop.manifest
application
"enterprise-multi-agent"
{
service
"master-orchestrator"
{
}
service
"workflow-orchestrator"
{
}
service
"specialist-pool"
{
}
ai
"master-brain"
{
}
ai
"specialist-brain"
{
}
ai
"validator-brain"
{
}
smartMemory
"enterprise-memory"
{
}
sql_database
"coordination-db"
{
}
queue
"task-coordination"
{
}
observer
"system-monitor"
{
}
}
Best Practices
Use capable models
- Deploy 70b+ parameter models for orchestration to ensure advanced planning capabilities
Design clear protocols
- Establish standardized communication protocols and task handoff procedures
Implement validation layers
- Build complete validation checking specialist outputs for consistency and quality
Plan for failure recovery
- Design orchestrators to handle specialist failures, timeouts, and quality issues
Design flexible specialists
- Create Service/AI pairings that can be dynamically configured rather than fixed-role
Optimize prompt libraries
- Build complete libraries of role-specific prompts for dynamic combination
Implement context awareness
- Ensure specialists understand their role in larger task and coordinate appropriately
Use procedural memory effectively
- Store communication protocols and validation criteria for consistent behavior
Use episodic learning
- Record successful collaboration patterns to improve future coordination
Organize semantic knowledge
- Structure domain knowledge to support cross-agent knowledge sharing
Balance orchestrator load
- Monitor orchestrator decision-making load and scale or optimize as needed
Optimize specialist utilization
- Track usage patterns and adjust scaling policies to match demand
Previous
Background Job Processing
Next
Retrieval Augmented Generation

Retrieval Augmented Generation (RAG)
URL: https://docs.liquidmetal.ai/reference/architecture-patterns/retrieval-augmented-generation/
Retrieval Augmented Generation (RAG)
Retrieval Augmented Generation (RAG) combines the generative capabilities of large language models with precision information retrieval systems. This pattern provides LLMs with access to current, domain-specific, or private information through efficient document indexing and semantic search.
Use this pattern when building:
Knowledge bases and document search systems
Customer support chatbots with company-specific information
Research assistants requiring factual accuracy
Question-answering systems over private datasets
Content recommendation systems with contextual relevance
Educational systems with curriculum-specific content
Architecture Diagram
flowchart TB
User[User Query]
ServiceEntry[Service Entry Point]
SmartBucket[SmartBucket]
User --> ServiceEntry
ServiceEntry --> SmartBucket
subgraph Ingestion ["Data Ingestion"]
Documents[Documents/Data]
APIs[External APIs]
Files[Files/PDFs/Text]
Documents --> SmartBucket
APIs --> SmartBucket
Files --> SmartBucket
end
subgraph Processing ["SmartBucket Processing"]
Indexing[Vector Indexing]
TextSearch[Text Search]
Metadata[Metadata Filtering]
SmartBucket --> Indexing
SmartBucket --> TextSearch
SmartBucket --> Metadata
end
subgraph Generation ["Response Generation"]
Context[Retrieved Context]
AI[AI Model]
GeneratedResponse[Generated Response]
SmartBucket --> Context
Context --> AI
AI --> GeneratedResponse
end
GeneratedResponse --> ServiceEntry
ServiceEntry --> User
Components
SmartBucket
- Core component handling data storage, indexing, and retrieval with automatic vector embeddings
Service
(Optional) - Entry point for user interactions, handling routing, authentication, and response formatting
AI
(Optional) - Language model for response generation using retrieved context
Logical Flow
Data Ingestion
- Documents and structured data uploaded to SmartBucket through various input methods
Automatic Processing
- SmartBucket extracts text, generates embeddings, creates search indices, and stores metadata
Query Processing
- SmartBucket analyzes queries to determine optimal search strategy (semantic, keyword, or hybrid)
Context Retrieval
- SmartBucket searches indexed content and returns most relevant chunks ranked by relevance scores
Response Generation
- Retrieved context optionally combined with query and sent to AI model for generation
Result Delivery
- Final response enriched with retrieved information returned with optional citations and references
Implementation
Create SmartBucket
- Deploy SmartBucket component configured for your data types and search requirements
Configure Indexing
- Set up chunking strategies and embedding models based on content type and use case
Load Initial Data
- Populate SmartBucket with initial dataset through batch upload or API ingestion
Implement Query Interface
- Create query endpoints accepting user questions and returning contextual responses
Production Setup
- Add authentication, rate limiting, monitoring, and external data source integration for updates
raindrop.manifest
Basic RAG
RAG with Service
raindrop.manifest
application
"rag_system"
{
smartBucket
"knowledge_base"
{
}
}
raindrop.manifest
application
"rag_application"
{
service
"api"
{
}
smartBucket
"knowledge_base"
{
}
ai
"generator"
{
}
}
Best Practices
Structure your content
- Organize documents with clear metadata for better filtering and categorization
Optimize chunk size
- Balance context preservation and search precision (typically 500-1500 tokens)
Clean your data
- Remove noise, ensure consistent formatting, and validate content quality before indexing
Use hybrid search
- Combine semantic and keyword search for best results across different query types
Implement reranking
- Use confidence thresholds to filter low-quality matches from search results
Test with real queries
- Validate search quality with actual user questions from your domain
Monitor indexing speed
- Large datasets may require batch processing strategies for optimal performance
Cache frequent queries
- Implement result caching for commonly asked questions to improve response times
Scale incrementally
- Start with smaller datasets and scale based on usage patterns and performance metrics
Previous
Multi-Agentic System
Next
Bucket Storage

Bucket
URL: https://docs.liquidmetal.ai/reference/bucket/
Bucket
The Bucket component provides object storage functionality for your Raindrop applications. You can store files of various types and retrieve them using unique keys.
Buckets support multiple file formats including ReadableStream, ArrayBuffer, ArrayBufferView, string, null, and Blob types. Each stored object includes metadata such as size, etag, upload timestamp, and optional custom metadata.
The component offers flexible listing capabilities with pagination, prefix filtering, and delimiter-based grouping. This makes it suitable for organizing files in hierarchical structures similar to traditional file systems.
Creating
Add a bucket to your application manifest to enable file storage:
application
"
demo-app
"
{
bucket
"
file-storage
"
{}
}
The bucket becomes available through environment bindings in your application code. You can create multiple buckets with different names for organizing different types of content.
Accessing
Access your bucket through the environment binding in request handlers:
export
default
async
function
handler
(
request
:
Request
,
env
:
Env
)
{
// Store a file
const
fileObject
= await
env
.
FILE_STORAGE
.
put
(
'
documents/readme.txt
'
,
'
Hello world
'
);
// Retrieve the file
const
retrieved
= await
env
.
FILE_STORAGE
.
get
(
'
documents/readme.txt
'
);
return
new
Response
(
await
retrieved
?.
text
());
}
Core Concepts
Main Interfaces
Bucket
- Primary interface for storage operations
BucketObject
- Metadata for stored objects
BucketObjectBody
- Object with readable content
BucketListOptions
- Configuration for listing operations
Core Data Types
BucketObject
interface
BucketObject {
readonly
key
:
string
;
// Object identifier
readonly
version
:
string
;
// Object version
readonly
size
:
number
;
// Size in bytes
readonly
etag
:
string
;
// Entity tag for caching
readonly
httpEtag
:
string
;
// HTTP-formatted etag
readonly
checksums
:
BucketChecksums
;
// Hash values
readonly
uploaded
:
Date
;
// Upload timestamp
readonly
httpMetadata
?:
BucketHTTPMetadata
;
// HTTP headers
readonly
customMetadata
?:
Record
<
string
,
string
>;
// User metadata
readonly
range
?:
BucketRange
;
// Partial content range
readonly
storageClass
:
string
;
// Storage tier
}
BucketObjectBody
interface
BucketObjectBody
extends
BucketObject
{
get
body
()
:
ReadableStream
;
// Stream for reading content
get
bodyUsed
()
:
boolean
;
// Whether stream was consumed
arrayBuffer
()
:
Promise
<
ArrayBuffer
>;
// Read as array buffer
text
()
:
Promise
<
string
>;
// Read as text
json
<
T
>
()
:
Promise
<
T
>;
// Parse as JSON
blob
()
:
Promise
<
Blob
>;
// Read as blob
}
BucketListOptions
interface
BucketListOptions {
limit
?:
number
;
// Max items to return (default: 250)
prefix
?:
string
;
// Filter by key prefix
cursor
?:
string
;
// Pagination token
delimiter
?:
string
;
// Group by delimiter (default: /)
startAfter
?:
string
;
// Start listing after this key
}
System Limits
Maximum file size: 5GB
Default list limit: 250 objects
Default delimiter:
/
head
Input
Output
head
(key: string):
Promise
<
BucketObject
|
null
>
// Returns object metadata without downloading content
Promise
<
BucketObject
|
null
>
Example
Check if a file exists and get its metadata:
// Get file metadata without downloading
const
metadata
= await
env
.
FILE_STORAGE
.
head
(
'
documents/readme.txt
'
);
if
(metadata) {
console
.
log
(
`
File size:
${
metadata
.
size
}
bytes
`
);
console
.
log
(
`
Uploaded:
${
metadata
.
uploaded
}
`
);
}
get
Input
Output
get
(key: string, options
?:
BucketGetOptions):
Promise
<
BucketObjectBody
|
null
>
// Returns object with readable content
Promise
<
BucketObjectBody
|
null
>
Example
Retrieve and read file content:
// Download file with content
const
file
= await
env
.
FILE_STORAGE
.
get
(
'
documents/readme.txt
'
);
if
(file) {
const
content
= await
file
.
text
();
console
.
log
(content);
}
put
Input
Output
put
(
key: string,
value: ReadableStream
|
ArrayBuffer
|
ArrayBufferView
|
string
|
null
|
Blob,
options
?:
BucketPutOptions
):
Promise
<
BucketObject
>
// Returns metadata for the stored object
Promise
<
BucketObject
>
Example
Store content with custom metadata:
// Store file with metadata
const
stored
= await
env
.
FILE_STORAGE
.
put
(
'
documents/readme.txt
'
,
'
Hello world
'
, {
customMetadata: { author:
'
user123
'
, category:
'
docs
'
},
httpMetadata: { contentType:
'
text/plain
'
}
}
);
console
.
log
(
`
Stored with etag:
${
stored
.
etag
}
`
);
delete
Input
Output
delete
(
keys
:
string
|
string
[]
)
:
Promise
<
void
>
// Resolves when deletion completes
Promise
<
void
>
Example
Remove single or multiple files:
// Delete single file
await
env
.
FILE_STORAGE
.
delete
(
'
documents/readme.txt
'
);
// Delete multiple files
await
env
.
FILE_STORAGE
.
delete
([
'
documents/file1.txt
'
,
'
documents/file2.txt
'
]);
list
Input
Output
list
(options
?:
BucketListOptions):
Promise
<
BucketObjects
>
// Returns objects and pagination info
Promise
<
BucketObjects
>
Example
List files with prefix filtering:
// List files in documents folder
const
result
= await
env
.
FILE_STORAGE
.
list
(
{
prefix:
'
documents/
'
,
limit:
10
}
);
result
.
objects
.
forEach
(
obj
=>
{
console
.
log
(
`
${
obj
.
key
}
:
${
obj
.
size
}
bytes
`
);
});
// Handle pagination
if
(result
.
truncated
) {
const
nextPage
= await
env
.
FILE_STORAGE
.
list
(
{
prefix:
'
documents/
'
,
cursor:
result
.
cursor
}
);
}
Previous
Retrieval Augmented Generation
Next
CLI Overview

CLI Reference Overview
URL: https://docs.liquidmetal.ai/reference/cli/
CLI Reference Overview
The Raindrop CLI provides commands to manage the entire lifecycle of LiquidMetal applications. Use these commands to authenticate, deploy applications, manage DNS zones, work with object storage, query logs, and integrate with AI coding assistants.
All commands follow the pattern
raindrop <category> <command> [arguments] [flags]
.
Command Categories
auth
- Manage authentication and organizations
build
- Application lifecycle management
dns
- DNS zone and record management
bucket
- S3-compatible credential management
object
- Object storage operations
logs
- Log querying and streaming
mcp
- AI coding assistant integration
annotation
- Application metadata management
query
- Smart search and RAG operations
Authentication Commands
Manage authentication with the LiquidMetal platform and switch between organizations.
Command
Description
Key Flags
Example
auth login
Authenticate with LiquidMetal
None
raindrop auth login
auth logout
Remove authentication
None
raindrop auth logout
auth list
List authenticated organizations
-o, --output
(table|json|text)
raindrop auth list --output json
auth select
Switch active organization
--organizationId
raindrop auth select org_123
See detailed documentation
:
raindrop auth
Build Commands
Manage application deployment, versioning, environment variables, and WorkOS integration.
Core Application Management
Command
Description
Key Flags
Example
build init
Initialize new project
-r, --root
,
-m, --manifest
raindrop build init
build generate
Generate code from manifest
-r, --root
,
-m, --manifest
raindrop build generate
build deploy
Deploy application
-s, --start
,
--no-watch
,
-a, --amend
raindrop build deploy --start
build status
Show application status
-o, --output
,
-v, --version-id
raindrop build status
build start
Start application
-a, --application
,
-v, --version-id
raindrop build start
build stop
Stop application
-a, --application
,
-v, --version-id
raindrop build stop
build list
List applications
-o, --output
,
--all
raindrop build list --all
build delete
Delete application version
-v, --version-id
,
--all
,
-f, --force
raindrop build delete --version-id v1
build validate
Validate manifest
-r, --root
,
-m, --manifest
raindrop build validate
Version Management
Command
Description
Key Flags
Example
build branch
Create version branch
--branch
,
-v, --version-id
raindrop build branch --branch feature-x
build checkout
Switch to version
None
raindrop build checkout v1.0.0
build sandbox
Mark version as sandbox
-v, --version-id
raindrop build sandbox
build unsandbox
Unmark version as sandbox
-v, --version-id
raindrop build unsandbox
build clone
Clone version
--target
,
-v, --version-id
raindrop build clone --target v2.0.0
build find
Find application versions
--limit
,
-a, --application
raindrop build find --limit 20
Environment Variables
Command
Description
Key Flags
Example
build env get
Get environment variable
-a, --application
,
-v, --version-id
raindrop build env get DATABASE_URL
build env set
Set environment variable
-a, --application
,
-v, --version-id
raindrop build env set API_KEY secret123
Tools
Command
Description
Key Flags
Example
build tools check
Validate manifest syntax
-r, --root
,
-m, --manifest
raindrop build tools check
build tools fmt
Format manifest
-r, --root
,
-m, --manifest
raindrop build tools fmt
WorkOS Integration
Command
Description
Key Flags
Example
build workos setup
Create WorkOS team
--admin-email
,
--name
raindrop build workos setup
build workos status
View WorkOS team info
-o, --output
raindrop build workos status
build workos invite
Invite user to team
--role
raindrop build workos invite user@example.com --role admin
build workos delete
Delete WorkOS integration
-f, --force
raindrop build workos delete --force
build workos env create
Create WorkOS environment
--name
,
--no-attach
raindrop build workos env create my-env
build workos env get
Get environment details
-o, --output
raindrop build workos env get my-app
build workos env set
Configure environment
--environment-id
,
--client-id
,
--api-key
, etc.
raindrop build workos env set my-app --environment-id env_123 ...
build workos env list
List environments
-o, --output
raindrop build workos env list
build workos env delete
Remove environment config
None
raindrop build workos env delete my-app
build workos env attach
Attach environment to version
-v, --version-id
raindrop build workos env attach
build workos env detach
Detach environment
-v, --version-id
raindrop build workos env detach
See detailed documentation
:
raindrop build
DNS Commands
Create and manage DNS zones and records.
Zone Management
Command
Description
Key Flags
Example
dns create
Create DNS zone
-o, --output
raindrop dns create example.com
dns delete
Delete DNS zone
-f, --force
raindrop dns delete example.com --force
dns get
Get zone details
-o, --output
raindrop dns get example.com
dns list
List all zones
-o, --output
raindrop dns list
Record Management
Command
Description
Key Flags
Example
dns records create
Create DNS record
--name
,
--type
,
--value
,
--ttl
,
--priority
raindrop dns records create example.com --name www --type A --value 1.2.3.4
dns records delete
Delete DNS record
-f, --force
raindrop dns records delete example.com rec_123
dns records get
Get record details
-o, --output
raindrop dns records get example.com rec_123
dns records list
List zone records
--type
,
-o, --output
raindrop dns records list example.com --type A
dns records update
Update DNS record
--name
,
--value
,
--ttl
,
--priority
raindrop dns records update example.com rec_123 --value 5.6.7.8
DNS record types
: A, AAAA, CNAME, MX, TXT, NS, SRV, PTR, CAA
Bucket Commands
Manage S3-compatible credentials for object storage buckets.
Command
Description
Key Flags
Example
bucket create-credential
Create S3 credentials
-o, --output
raindrop bucket create-credential my-bucket
bucket delete-credential
Delete S3 credentials
-f, --force
raindrop bucket delete-credential my-bucket AKIA...
bucket get-credential
Get S3 credentials
-o, --output
raindrop bucket get-credential my-bucket AKIA...
bucket list-credentials
List bucket credentials
-o, --output
raindrop bucket list-credentials my-bucket
Object Commands
Perform object storage operations on buckets.
Command
Description
Key Flags
Example
object get
Get object from bucket
-b, --bucket
,
-o, --output
raindrop object get myfile.txt --bucket my-bucket
object put
Put object into bucket
-b, --bucket
,
--content-type
raindrop object put myfile.txt ./local-file.txt --bucket my-bucket
object delete
Delete object from bucket
-b, --bucket
,
-f, --force
raindrop object delete myfile.txt --bucket my-bucket
object list
List objects in bucket
-b, --bucket
,
--prefix
,
-o, --output
raindrop object list --bucket my-bucket --prefix images/
Bucket version syntax
: Specify version with
#
, e.g.,
--bucket my-bucket#versionId
Log Commands
Query historical logs or stream real-time logs from deployed applications.
Command
Description
Key Flags
Example
logs query
Query historical logs
-a, --application
,
-v, --version-id
,
--query
,
--start
,
--end
,
--limit
raindrop logs query --query "error" --start "1h ago"
logs tail
Stream real-time logs
-a, --application
,
-v, --version-id
,
--filter
raindrop logs tail --filter "error"
See detailed documentation
:
raindrop logs
MCP Commands
Integrate Raindrop with AI coding assistants using Model Context Protocol.
Command
Description
Requirements
Example
mcp status
Show MCP integration status
None
raindrop mcp status
mcp install-claude
Install Raindrop for Claude Code
Claude Code installed
raindrop mcp install-claude
mcp install-goose
Install Raindrop for Goose
Goose installed
raindrop mcp install-goose
Installation features
:
Adds raindrop-mcp server to AI assistant configuration
Creates slash commands/recipes:
/new-raindrop-app
- Start new application development
/update-raindrop-app
- Update existing applications
/reattach-raindrop-session
- Resume previous sessions
Annotation Commands
Manage application metadata using Machine Resource Names (MRNs).
Command
Description
Key Flags
Example
annotation get
Get annotation by MRN
-f, --format
raindrop annotation get my-module:my-key:
annotation put
Create/update annotation
-o, --output
raindrop annotation put my-module:my-key: "My annotation"
annotation list
List annotations by prefix
-o, --output
,
-l, --limit
raindrop annotation list my-module
MRN format
:
annotation:app:version:module:item^key:
Can use partial MRNs:
my-module:my-key:
Can use full MRNs:
annotation:my-app:v1.0.0:my-module:my-key:
Use
-
to read from stdin:
raindrop annotation put my-module:key: - < file.txt
Query Commands
Perform smart search and RAG (Retrieval Augmented Generation) operations on smart buckets.
Command
Description
Key Flags
Example
query chunk-search
RAG search across buckets
-b, --buckets
raindrop query chunk-search "What is LiquidMetal?" --buckets bucket1 bucket2
query document
Chat with a document
-b, --bucket
,
--object-id
raindrop query document "Summarize this" --bucket my-bucket --object-id doc.pdf
query events
Query application events
-a, --application
,
-v, --version-id
raindrop query events
query reindex
Reindex bucket objects
-b, --bucket
,
--parallel
,
-d, --dry-run
raindrop query reindex --bucket my-bucket --parallel 5
query search
Natural language search
-b, --buckets
,
--page
,
--request-id
raindrop query search "Find documents about X" --buckets my-bucket
Common Flag Patterns
Most commands support these common flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
,
table
Varies by command
-r, --root
Project root directory
Path
Current directory
-m, --manifest
Manifest file name
Filename
raindrop.manifest
-a, --application
Application name
String
From manifest
-v, --version-id
Version ID
String
From config
-f, --force
Skip confirmation prompts
Boolean
false
Getting Help
View help for any command:
Terminal window
raindrop
--help
raindrop
<category>
--help
raindrop
<category>
<command>
--help
Examples:
Terminal window
raindrop
build
--help
raindrop
dns
records
create
--help
Exit Codes
0
- Success
1
- General error (validation failures, file not found, etc.)
2
- Invalid arguments
5
- Resource not found (status command only)
Previous
Bucket Storage
Next
raindrop annotation

raindrop annotation
URL: https://docs.liquidmetal.ai/reference/cli/annotation/
raindrop annotation
The
raindrop annotation
command manages application metadata using Machine Resource Names (MRNs). Store structured metadata, configuration, documentation, or any text data associated with your Raindrop applications and resources.
Annotations use MRNs to uniquely identify metadata. MRNs provide a hierarchical naming system that maps to your application structure.
Machine Resource Names (MRNs)
MRNs uniquely identify annotations with this format:
annotation:app-name:version:module:item^key:
MRN Components:
annotation
- Resource type (always “annotation”)
app-name
- Application name
version
- Application version
module
- Module name within application
item
- Specific item (optional, separated by
^
)
key
- Annotation key
Partial MRNs:
You can use partial MRNs and the CLI infers application/version from your manifest and config:
Terminal window
# Partial MRN (infers app and version)
my-module:my-key:
# Full MRN (explicit everything)
annotation:my-app:v1.0.0:my-module:my-key:
# With item specifier
my-module:my-item^my-key:
Basic Usage
Store an annotation:
Terminal window
raindrop
annotation
put
my-module:config:
"
Production configuration
"
Retrieve an annotation:
Terminal window
raindrop
annotation
get
my-module:config:
List annotations:
Terminal window
raindrop
annotation
list
my-module
Command Reference
raindrop annotation get
Retrieve an annotation by MRN.
Syntax:
Terminal window
raindrop
annotation
get
<mrn>
[--format
<format>]
[--manifest
<path>]
Arguments:
<mrn>
- MRN of annotation to retrieve (partial or full) (required)
Flags:
Flag
Description
Values
Default
-f, --format
Output format
text
,
json
text
-m, --manifest
Manifest file path
Path
raindrop.manifest
Examples:
Terminal window
# Get with partial MRN
raindrop
annotation
get
my-module:config:
# Get with full MRN
raindrop
annotation
get
annotation:my-app:v1.0.0:my-module:config:
# Get with item specifier
raindrop
annotation
get
my-module:my-item^description:
# Get as JSON
raindrop
annotation
get
my-module:config:
--format
json
Output (text):
MRN: annotation:my-app:v1.0.0:my-module:config:
Value: Production configuration
Created: 2025-10-23T10:30:00.000Z
Modified: 2025-10-23T15:45:00.000Z
Output (JSON):
{
"mrn"
:
"
annotation:my-app:v1.0.0:my-module:config:
"
,
"value"
:
"
Production configuration
"
,
"createdAt"
:
"
2025-10-23T10:30:00.000Z
"
,
"modifiedAt"
:
"
2025-10-23T15:45:00.000Z
"
}
raindrop annotation put
Create or update an annotation.
Syntax:
Terminal window
raindrop
annotation
put
<mrn>
<annotation>
[--output
<format>]
[--manifest
<path>]
Arguments:
<mrn>
- MRN of annotation (partial or full) (required)
<annotation>
- Annotation content (use
-
for stdin,
@filename
for file) (required)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
text
-m, --manifest
Manifest file path
Path
raindrop.manifest
Examples:
Terminal window
# Create annotation with inline text
raindrop
annotation
put
my-module:config:
"
Production configuration
"
# Create with full MRN
raindrop
annotation
put
annotation:my-app:v1.0.0:my-module:config:
"
Value
"
# Read from stdin
echo
"
Configuration data
"
|
raindrop
annotation
put
my-module:config:
-
# Read from file
raindrop
annotation
put
my-module:docs:
@README.md
# Read multiline from stdin (heredoc)
raindrop
annotation
put
my-module:config:
-
<<
EOF
{
"database": "postgres://localhost/mydb",
"apiKey": "secret123"
}
EOF
# Create with item specifier
raindrop
annotation
put
my-module:handler-1^docs:
"
Handler documentation
"
Output:
✓ Annotation created/updated successfully
MRN: annotation:my-app:v1.0.0:my-module:config:
Reading from Stdin:
Use
-
as the annotation value to read from stdin:
Terminal window
# Interactive input (Ctrl+D to finish)
raindrop
annotation
put
my-module:notes:
-
Type
your
notes
here...
Multiple
lines
supported...
<Ctrl+D>
# Piped input
cat
config.json
|
raindrop
annotation
put
my-module:config:
-
# Heredoc
raindrop
annotation
put
my-module:readme:
-
<<
'EOF'
# My Module
Documentation goes here
EOF
raindrop annotation list
List annotations by MRN prefix.
Syntax:
Terminal window
raindrop
annotation
list
[mrnPrefix] [--output <format>] [--limit <number>] [--manifest <path>]
Arguments:
[mrnPrefix]
- MRN prefix to filter by (optional, uses app/version from config if omitted)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
table
,
text
,
json
table
-l, --limit
Maximum annotations to return
Number
100
-m, --manifest
Manifest file path
Path
raindrop.manifest
Examples:
Terminal window
# List all annotations for current app/version
raindrop
annotation
list
# List annotations for specific module
raindrop
annotation
list
my-module
# List with full prefix
raindrop
annotation
list
annotation:my-app:v1.0.0:my-module
# List as JSON
raindrop
annotation
list
my-module
--output
json
# Limit results
raindrop
annotation
list
my-module
--limit
10
Output (table):
┌──────────────────────────────────────────────────┬──────────────────────────┬──────────────────────────┐
│ MRN                                              │ Created                  │ Modified                 │
├──────────────────────────────────────────────────┼──────────────────────────┼──────────────────────────┤
│ annotation:my-app:v1.0.0:my-module:config:       │ 2025-10-23T10:30:00.000Z │ 2025-10-23T15:45:00.000Z │
│ annotation:my-app:v1.0.0:my-module:docs:         │ 2025-10-23T09:15:00.000Z │ 2025-10-23T09:15:00.000Z │
│ annotation:my-app:v1.0.0:my-module:metadata:     │ 2025-10-22T14:20:00.000Z │ 2025-10-23T11:30:00.000Z │
└──────────────────────────────────────────────────┴──────────────────────────┴──────────────────────────┘
Output (text):
MRN: annotation:my-app:v1.0.0:my-module:config:
Created: 2025-10-23T10:30:00.000Z
Modified: 2025-10-23T15:45:00.000Z
MRN: annotation:my-app:v1.0.0:my-module:docs:
Created: 2025-10-23T09:15:00.000Z
Modified: 2025-10-23T09:15:00.000Z
Use Cases
Configuration Storage
Store configuration data for modules:
Terminal window
# Store database configuration
raindrop
annotation
put
my-module:db-config:
-
<<
EOF
{
"host": "localhost",
"port": 5432,
"database": "myapp"
}
EOF
# Retrieve configuration
raindrop
annotation
get
my-module:db-config:
--format
json
Documentation
Attach documentation to modules:
Terminal window
# Store module documentation
raindrop
annotation
put
my-module:readme:
@MODULE_README.md
# Store API documentation
raindrop
annotation
put
api-handler:docs:
@API_DOCS.md
# Retrieve and view
raindrop
annotation
get
my-module:readme:
Metadata
Track deployment metadata:
Terminal window
# Record deployment info
raindrop
annotation
put
app:deployment-info:
"
Deployed by CI/CD on $(
date
)
"
# Track version notes
raindrop
annotation
put
app:release-notes:
-
<<
EOF
## Version 1.2.0
- Added user authentication
- Fixed database connection pooling
- Updated dependencies
EOF
# Query deployment history
raindrop
annotation
list
app:deployment
Feature Flags
Store feature flag configurations:
Terminal window
# Enable feature
raindrop
annotation
put
app:features^new-ui:
"
enabled
"
# Disable feature
raindrop
annotation
put
app:features^beta-api:
"
disabled
"
# List all feature flags
raindrop
annotation
list
app:features
Environment-Specific Notes
Store environment-specific information:
Terminal window
# Production notes
raindrop
annotation
put
prod-handler:notes:
"
Uses production database, requires API key
"
# Development notes
raindrop
annotation
put
dev-handler:notes:
"
Uses local database, no auth required
"
# View notes
raindrop
annotation
get
prod-handler:notes:
Common Workflows
Bulk Annotation Creation
Create multiple annotations from a directory:
#!/bin/bash
# annotate-docs.sh - Annotate modules with documentation files
MODULE
=
"
my-module
"
DOCS_DIR
=
"
./docs
"
# Annotate each documentation file
for
doc
in
"
$DOCS_DIR
"
/*.md
;
do
basename
=
$(
basename
"
$doc
"
.md
)
echo
"
Annotating:
$MODULE
:
$basename
:
"
raindrop
annotation
put
"
$MODULE
:
$basename
:
"
"
@
$doc
"
done
Configuration Management
Manage configurations across environments:
Terminal window
# Store production config
raindrop
annotation
put
app:config^production:
@config/production.json
# Store staging config
raindrop
annotation
put
app:config^staging:
@config/staging.json
# Store development config
raindrop
annotation
put
app:config^development:
@config/development.json
# List all configs
raindrop
annotation
list
app:config
Annotation Backup
Backup annotations to local files:
#!/bin/bash
# backup-annotations.sh - Backup all annotations
OUTPUT_DIR
=
"
./annotation-backup
"
mkdir
-p
"
$OUTPUT_DIR
"
# Get list of annotations
annotations
=
$(
raindrop
annotation
list
--output
json
|
jq
-r
'
.[].mrn
'
)
# Download each annotation
echo
"
$annotations
"
|
while
read
mrn
;
do
# Sanitize MRN for filename
filename
=
$(
echo
"
$mrn
"
|
tr
'
:
'
'
_
'
|
tr
'
^
'
'
_
'
)
echo
"
Backing up:
$mrn
"
raindrop
annotation
get
"
$mrn
"
>
"
$OUTPUT_DIR
/
$filename
.txt
"
done
echo
"
Backup complete:
$OUTPUT_DIR
"
Annotation Restore
Restore annotations from backup:
#!/bin/bash
# restore-annotations.sh - Restore annotations from backup
BACKUP_DIR
=
"
./annotation-backup
"
# Restore each annotation
for
file
in
"
$BACKUP_DIR
"
/*.txt
;
do
# Extract MRN from filename
mrn
=
$(
basename
"
$file
"
.txt
|
tr
'
_
'
'
:
'
)
echo
"
Restoring:
$mrn
"
raindrop
annotation
put
"
$mrn
"
-
<
"
$file
"
done
echo
"
Restore complete
"
Search Annotations
Search annotation content:
Terminal window
# List all annotations and search content
raindrop
annotation
list
--output
json
|
\
jq
-r
'
.[].mrn
'
|
\
while
read
mrn
;
do
content
=
$(
raindrop
annotation
get
"
$mrn
"
)
if
echo
"
$content
"
|
grep
-q
"
production
"
;
then
echo
"
Found in:
$mrn
"
echo
"
$content
"
echo
"
---
"
fi
done
Best Practices
Naming Conventions:
Use descriptive module names in MRNs
Employ consistent key naming (e.g.,
config
,
docs
,
metadata
)
Use item specifiers (
^
) for related groupings
Follow kebab-case for readability
Data Storage:
Store small to medium-sized text data
Use structured formats (JSON, YAML) for complex data
Avoid storing binary data
Keep annotations focused and single-purpose
Version Management:
Version-specific annotations for configuration changes
Use current version for active documentation
Archive old versions for history
Copy annotations when branching
Security:
Never store secrets or credentials in annotations
Use environment variables for sensitive data
Review annotations before sharing projects
Implement access controls at organization level
Organization:
Group related annotations with common prefixes
Document annotation schema for your project
Create indexes with list operations
Clean up unused annotations regularly
MRN Format Reference
Full MRN:
annotation:app-name:version:module:item^key:
│          │        │       │      │    │
│          │        │       │      │    └─ Annotation key
│          │        │       │      └────── Optional item specifier
│          │        │       └───────────── Module name
│          │        └───────────────────── Version ID
│          └────────────────────────────── Application name
└───────────────────────────────────────── Resource type
Partial MRN (app/version inferred):
module:key:
module:item^key:
Item Specifier (^):
module:item1^key:    - Annotation for item1
module:item2^key:    - Annotation for item2
module:^key:         - Annotation without specific item
Exit Codes
Code
Description
0
Command completed successfully
1
General error (annotation not found, invalid MRN, etc.)
2
Invalid arguments
Previous
CLI Overview
Next
raindrop auth

raindrop auth
URL: https://docs.liquidmetal.ai/reference/cli/auth/
raindrop auth
The
raindrop auth
command manages your authentication with the LiquidMetal platform. You can authenticate through a browser-based flow, manage multiple organization accounts, and switch between them.
Authentication stores a bearer token for each organization you log into. The CLI tracks which organization is currently active and uses that token for all subsequent commands. You can authenticate with multiple organizations and switch between them as needed.
All authentication state is stored locally on your machine. Logging out removes the stored token for the current organization.
Basic Usage
Start by logging into your LiquidMetal organization:
Terminal window
raindrop
auth
login
This opens your browser and displays a QR code in the terminal. Complete the authentication flow in your browser. The CLI stores your credentials and sets this organization as active.
List all authenticated organizations:
Terminal window
raindrop
auth
list
Switch between organizations:
Terminal window
raindrop
auth
select
Command Syntax
Terminal window
raindrop
auth
<command>
[options]
Available Commands:
login
- Authenticate with a new organization
logout
- Remove authentication for the current organization
list
- Display all authenticated organizations
select
- Change the active organization
raindrop auth login
Authenticate with a LiquidMetal organization using browser-based authentication. This command opens your default browser and displays a QR code in the terminal.
Implementation:
packages/raindrop/src/commands/auth/login.ts
Syntax
Terminal window
raindrop
auth
login
Behavior
The command performs these steps:
Generates an authentication URL and QR code
Opens the URL in your default browser
Displays the QR code in the terminal
Waits for you to complete authentication in the browser
Stores the bearer token locally
Sets the organization as your active organization
Output
Terminal window
[QR code displayed in terminal]
Scan
the
QR
code
or,
using
a
browser
visit:
https://liquidmetal.run/auth/device/...
opening
url...
⠋
Waiting
for
session...
Logged
in
as
user@company.com
to
Acme
Corp
Error Cases
Authentication timeout:
Terminal window
failed
to
authenticate
in
time
Exit code: 1
raindrop auth logout
Remove the authentication token for your currently active organization. This command clears the stored credentials and unsets the active organization.
Implementation:
packages/raindrop/src/commands/auth/logout.ts
Syntax
Terminal window
raindrop
auth
logout
Behavior
The command removes the bearer token for the current organization from local storage. It also clears the current organization setting. You must log in again to use CLI commands that require authentication.
raindrop auth list
Display all organizations you have authenticated with. Shows organization IDs, names, user emails, and which organization is currently active.
Implementation:
packages/raindrop/src/commands/auth/list.ts
Syntax
Terminal window
raindrop
auth
list
[--output
<format>]
Options
Flag
Description
Values
Default
-o, --output
Output format
text
,
table
,
json
table
Output Formats
Table format (default):
Terminal window
┌─────────────────┬────────────────────────┬──────────────────┬────────────┐
│
(index)         │ organizationName       │ userEmail        │ isSelected │
├─────────────────┼────────────────────────┼──────────────────┼────────────┤
│
org_01ABC123XYZ
│
'
Acme Corp
'
│
'
user@company.com
'
│
false
│
│
org_01DEF456UVW
│
'
Development Team
'
│
'
user@company.com
'
│
false
│
│
org_01GHI789RST
│
'
Production Environment
'
│
'
user@company.com
'
│
true
│
└─────────────────┴────────────────────────┴──────────────────┴────────────┘
Text format:
Terminal window
org_01ABC123XYZ
-
user@company.com
Acme
Corp
org_01DEF456UVW
-
user@company.com
Development
Team
org_01GHI789RST
(current) - user@company.com Production Environment
JSON format:
[
{
"organizationId"
:
"
org_01ABC123XYZ
"
,
"organizationName"
:
"
Acme Corp
"
,
"userEmail"
:
"
user@company.com
"
,
"isSelected"
:
false
},
{
"organizationId"
:
"
org_01DEF456UVW
"
,
"organizationName"
:
"
Development Team
"
,
"userEmail"
:
"
user@company.com
"
,
"isSelected"
:
false
},
{
"organizationId"
:
"
org_01GHI789RST
"
,
"organizationName"
:
"
Production Environment
"
,
"userEmail"
:
"
user@company.com
"
,
"isSelected"
:
true
}
]
raindrop auth select
Change which organization is currently active. All subsequent CLI commands use the selected organization’s credentials.
Implementation:
packages/raindrop/src/commands/auth/select.ts
Syntax
Terminal window
raindrop
auth
select
[--organizationId
<value>]
Options
Flag
Description
Required
--organizationId
ID of the organization to select
No
Behavior
Without the organizationId flag:
The command displays an interactive prompt listing all authenticated organizations. Select one using arrow keys and press Enter.
With the organizationId flag:
The command immediately switches to the specified organization without showing a prompt.
Error Cases
No authenticated organizations:
Terminal window
no
organizations
are
authorized.
see
raindrop
auth
login.
Exit code: 2
Invalid organization ID:
Terminal window
org_INVALID123
not
authenticated
Exit code: 2
Examples
First-time setup
Log into your organization for the first time:
Terminal window
raindrop
auth
login
The browser opens automatically. Complete the authentication flow. The CLI confirms your login:
Terminal window
Logged
in
as
user@company.com
to
Acme
Corp
Working with multiple organizations
You work with both a development and production organization. Log into both:
Terminal window
# Log into development organization
raindrop
auth
login
# Complete authentication in browser
Logged
in
as
user@company.com
to
Development
Team
# Log into production organization
raindrop
auth
login
# Complete authentication in browser
Logged
in
as
user@company.com
Production
Environment
View all authenticated organizations:
Terminal window
raindrop
auth
list
--output
text
Terminal window
org_01ABC123XYZ
-
user@company.com
Acme
Corp
org_01DEF456UVW
-
user@company.com
Development
Team
org_01GHI789RST
(current) - user@company.com Production Environment
Switch to your development organization using the interactive prompt:
Terminal window
raindrop
auth
select
Or specify the organization ID directly:
Terminal window
raindrop
auth
select
--organizationId
org_01DEF456UVW
Exit Codes
Code
Description
0
Command completed successfully
1
Authentication timeout or manifest errors
2
Invalid arguments or organization not found
Previous
raindrop annotation
Next
raindrop bucket

raindrop bucket
URL: https://docs.liquidmetal.ai/reference/cli/bucket/
raindrop bucket
The
raindrop bucket
command manages S3-compatible credentials for accessing Raindrop object storage buckets. Create credentials to access buckets from external tools, applications, or S3-compatible clients.
Credentials provide AWS S3-compatible access key ID and secret access key pairs. Use these credentials with any S3-compatible client library or tool to interact with Raindrop buckets.
Basic Usage
Create S3 credentials for a bucket:
Terminal window
raindrop
bucket
create-credential
my-bucket
List all credentials for a bucket:
Terminal window
raindrop
bucket
list-credentials
my-bucket
Command Reference
raindrop bucket create-credential
Create new S3-compatible credentials for a bucket.
Syntax:
Terminal window
raindrop
bucket
create-credential
<bucket>
[--output
<format>]
Arguments:
<bucket>
- Bucket name (required)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
text
Examples:
Terminal window
# Create credentials
raindrop
bucket
create-credential
my-bucket
# Create with JSON output
raindrop
bucket
create-credential
my-bucket
--output
json
Output:
Successfully created S3 credential for bucket 'my-bucket'
Access Key: AKIAIOSFODNN7EXAMPLE
Secret Key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Name: default
Created: 2025-10-23T10:30:00.000Z
⚠️  Save these credentials securely - the secret key cannot be retrieved again!
Save Secret Keys
The secret access key is shown only once during creation. Save it securely - you cannot retrieve it again. If lost, delete the credential and create a new one.
raindrop bucket delete-credential
Delete S3 credentials for a bucket.
Syntax:
Terminal window
raindrop
bucket
delete-credential
<bucket>
<accessKeyId>
[--force]
Arguments:
<bucket>
- Bucket name (required)
<accessKeyId>
- AWS access key ID to delete (required)
Flags:
Flag
Description
Default
-f, --force
Skip confirmation prompt
false
Examples:
Terminal window
# Delete with confirmation
raindrop
bucket
delete-credential
my-bucket
AKIAIOSFODNN7EXAMPLE
# Delete without confirmation
raindrop
bucket
delete-credential
my-bucket
AKIAIOSFODNN7EXAMPLE
--force
Behavior:
Deleting credentials immediately revokes access. Any applications or tools using these credentials will no longer be able to access the bucket.
raindrop bucket get-credential
Get details for specific S3 credentials.
Syntax:
Terminal window
raindrop
bucket
get-credential
<bucket>
<accessKeyId>
[--output
<format>]
Arguments:
<bucket>
- Bucket name (required)
<accessKeyId>
- AWS access key ID (required)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
text
Examples:
Terminal window
# Get credential details
raindrop
bucket
get-credential
my-bucket
AKIAIOSFODNN7EXAMPLE
# Get as JSON
raindrop
bucket
get-credential
my-bucket
AKIAIOSFODNN7EXAMPLE
--output
json
Output:
Access Key: AKIAIOSFODNN7EXAMPLE
Name: default
Created: 2025-10-23T10:30:00.000Z
Last Used: 2025-10-23T15:45:00.000Z
Secret Keys Not Retrievable
This command shows credential metadata but not the secret access key. Secret keys are only shown once during creation.
raindrop bucket list-credentials
List all S3 credentials for a bucket.
Syntax:
Terminal window
raindrop
bucket
list-credentials
<bucket>
[--output
<format>]
Arguments:
<bucket>
- Bucket name (required)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
,
table
table
Examples:
Terminal window
# List credentials in table format
raindrop
bucket
list-credentials
my-bucket
# List as JSON
raindrop
bucket
list-credentials
my-bucket
--output
json
Output:
┌────────────────────────┬─────────┬──────────────────────┬──────────────────────┐
│ Access Key ID          │ Name    │ Created              │ Last Used            │
├────────────────────────┼─────────┼──────────────────────┼──────────────────────┤
│ AKIAIOSFODNN7EXAMPLE   │ default │ 2025-10-23T10:30:00Z │ 2025-10-23T15:45:00Z │
│ AKIAJ7EXAMPLE2NDKEY    │ backup  │ 2025-10-20T09:15:00Z │ Never                │
└────────────────────────┴─────────┴──────────────────────┴──────────────────────┘
Using S3 Credentials
With AWS CLI
Configure AWS CLI with Raindrop credentials:
Terminal window
# Configure AWS CLI profile
aws
configure
--profile
raindrop
# Enter credentials when prompted:
# AWS Access Key ID: AKIAIOSFODNN7EXAMPLE
# AWS Secret Access Key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
# Default region name: us-east-1
# Default output format: json
# Use with AWS CLI
aws
s3
ls
s3://my-bucket
--profile
raindrop
aws
s3
cp
file.txt
s3://my-bucket/
--profile
raindrop
With S3 Client Libraries
Use credentials with S3-compatible libraries:
Python (boto3):
import
boto3
s3
=
boto3.
client
(
'
s3
'
,
aws_access_key_id
=
'
AKIAIOSFODNN7EXAMPLE
'
,
aws_secret_access_key
=
'
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
'
,
endpoint_url
=
'
https://s3.raindrop.liquidmetal.ai
'
)
# List objects
response
=
s3.
list_objects_v2
(
Bucket
=
'
my-bucket
'
)
# Upload file
s3.
upload_file
(
'
local-file.txt
'
,
'
my-bucket
'
,
'
remote-file.txt
'
)
JavaScript (AWS SDK):
import
{ S3Client, ListObjectsV2Command, PutObjectCommand }
from
"
@aws-sdk/client-s3
"
;
const
s3Client
=
new
S3Client
(
{
region:
"
us-east-1
"
,
credentials: {
accessKeyId:
"
AKIAIOSFODNN7EXAMPLE
"
,
secretAccessKey:
"
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
"
,
},
endpoint:
"
https://s3.raindrop.liquidmetal.ai
"
,
}
);
// List objects
const
listCommand
=
new
ListObjectsV2Command
(
{ Bucket:
"
my-bucket
"
}
);
const
listResponse
= await
s3Client
.
send
(
listCommand
);
// Upload object
const
putCommand
=
new
PutObjectCommand
(
{
Bucket:
"
my-bucket
"
,
Key:
"
remote-file.txt
"
,
Body:
fileContents
,
}
);
await
s3Client
.
send
(
putCommand
);
Environment Variables
Set credentials as environment variables:
Terminal window
export
AWS_ACCESS_KEY_ID
=
AKIAIOSFODNN7EXAMPLE
export
AWS_SECRET_ACCESS_KEY
=
wJalrXUtnFEMI
/
K7MDENG
/
bPxRfiCYEXAMPLEKEY
export
AWS_ENDPOINT_URL
=
https
://
s3
.
raindrop
.
liquidmetal
.
ai
# Now use any S3-compatible tool
aws
s3
ls
s3://my-bucket
Common Workflows
Initial Setup
Create credentials for a new bucket:
Terminal window
# Create credentials
raindrop
bucket
create-credential
my-bucket
# Save output securely (example: password manager, secrets vault)
# Test access with AWS CLI
aws
s3
ls
s3://my-bucket
--profile
raindrop
Credential Rotation
Rotate credentials for security:
Terminal window
# List current credentials
raindrop
bucket
list-credentials
my-bucket
# Create new credentials
raindrop
bucket
create-credential
my-bucket
# Update applications with new credentials
# Delete old credentials after verification
raindrop
bucket
delete-credential
my-bucket
AKIAIOSFODNN7EXAMPLE
--force
Multiple Credentials
Create separate credentials for different purposes:
Terminal window
# Production credentials
raindrop
bucket
create-credential
my-bucket
# Save with name "production"
# Development credentials
raindrop
bucket
create-credential
my-bucket
# Save with name "development"
# CI/CD credentials
raindrop
bucket
create-credential
my-bucket
# Save with name "ci-cd"
# List all credentials
raindrop
bucket
list-credentials
my-bucket
Revoking Access
Immediately revoke access:
Terminal window
# Identify credential to revoke
raindrop
bucket
list-credentials
my-bucket
# Delete credential (no confirmation)
raindrop
bucket
delete-credential
my-bucket
AKIAIOSFODNN7EXAMPLE
--force
# Verify deletion
raindrop
bucket
list-credentials
my-bucket
Security Best Practices
Credential Management:
Create separate credentials for each application or environment
Rotate credentials regularly (every 90 days recommended)
Delete unused credentials immediately
Never commit credentials to version control
Use environment variables or secrets management systems
Implement least-privilege access patterns
Monitoring:
Track “Last Used” timestamps to identify inactive credentials
Audit credential usage regularly
Set up alerts for credential creation and deletion
Recovery:
If credentials are compromised, delete them immediately
Create new credentials and update applications
Review access logs for suspicious activity
Exit Codes
Code
Description
0
Command completed successfully
1
General error (bucket not found, credential not found, etc.)
2
Invalid arguments
Previous
raindrop auth
Next
raindrop build

raindrop build
URL: https://docs.liquidmetal.ai/reference/cli/build/
raindrop build
The
raindrop build
command manages the entire lifecycle of Raindrop applications. You can initialize projects, generate code from manifests, deploy to production, and monitor application health.
This command operates on your project’s manifest file (
raindrop.manifest
by default). The manifest defines your application’s structure, including services, databases, handlers, and environment variables. Most commands automatically detect the manifest in your current directory.
Use
raindrop build
commands to move from local development to production deployment. The workflow starts with initialization, proceeds through code generation and validation, and ends with deployment and monitoring.
Basic Usage
Start a new project in the current directory:
Terminal window
raindrop
build
init
Generate code from your manifest:
Terminal window
raindrop
build
generate
Deploy your application:
Terminal window
raindrop
build
deploy
Check deployment status:
Terminal window
raindrop
build
status
Command Syntax
raindrop build COMMAND
COMMANDS
raindrop build init [PATH]              Initialize new project
raindrop build generate                 Generate code from manifest
raindrop build deploy                   Deploy application to Raindrop
raindrop build status                   Show application status
raindrop build start                    Start deployed application
raindrop build stop                     Stop running application
raindrop build branch <branch>          Create new version branch
raindrop build checkout [version]       Switch to specific version
raindrop build delete [application]     Delete application versions
raindrop build validate                 Run type checking and validation
raindrop build list                     List applications in catalog
raindrop build sandbox                  Mark version as sandboxed
raindrop build unsandbox                Remove sandbox status
raindrop build env set <var> [value]    Set environment variable
raindrop build env get <var>            Get environment variable
Initialize Command
Syntax:
raindrop build init [PATH]
Create a new Raindrop project with default structure.
Arguments:
[PATH]
- Directory path (default: current directory)
Flags:
--overwrite
- Overwrite existing package.json
Behavior:
Creates project directory if it does not exist. Generates a default
raindrop.manifest
with a “hello-world” application. Creates
package.json
,
tsconfig.json
, and required directory structure.
Fails if
package.json
exists without
--overwrite
flag. This prevents accidentally overwriting existing projects.
Example Output:
Terminal window
$
raindrop
build
init
my-service
path:
my-service
Initialized
LiquidMetal.AI
in
my-service
Error Cases:
Terminal window
# Directory exists with package.json
$
raindrop
build
init
existing-project
Error:
A
project
existing-project
has
already
been
initialized.
# Use overwrite flag to proceed
$
raindrop
build
init
existing-project
--overwrite
Generate Command
Syntax:
raindrop build generate
Generate TypeScript code from manifest definitions.
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-o, --output <dir>
- Output directory for build artifacts (default: dist)
Behavior:
Parses the manifest file and validates syntax. Creates TypeScript type definitions in handler directories. Updates
package.json
with dependencies. Generates handler scaffolding code if handlers do not exist.
Run this command after changing the manifest to regenerate types. All handlers receive updated type definitions in their
raindrop-types.ts
files.
Example Output:
Terminal window
$
raindrop
build
generate
# Silently generates files, no output on success
Error Cases:
Terminal window
# Invalid manifest syntax
$
raindrop
build
generate
Error:
Could
not
initialize
project
at
.:
Syntax
error
on
line
12
# Missing manifest file
$
raindrop
build
generate
-M
missing.manifest
Error:
Could
not
load
manifest:
ENOENT:
no
such
file
or
directory
Deploy Command
Syntax:
raindrop build deploy
Deploy application to Raindrop platform.
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-o, --output <dir>
- Output directory (default: dist)
-v, --version <id>
- Specific version ID to deploy
-s, --start
- Start application immediately after deploy
--no-watch
- Skip watching deployment status
-a, --amend
- Amend existing version instead of creating new one
--lock <value>
- Override lock ID to resume deployment
Behavior:
Validates project directory structure. Builds handler bundles. Uploads application code to Raindrop. Creates new version or amends existing version. Watches deployment status unless
--no-watch
specified.
Sandbox mode always runs in amend mode automatically. Full version deployments require full versioned deployments for updates.
Example Output:
Terminal window
$
raindrop
build
deploy
--start
🔔
You
deployed
a
full
version,
updates
will
require
a
full
versioned
deployment
to
work
📊
Watching
deployment
status...
hello-world@01jac6p20m4gahn1kaa2mhm2js
Status:
RUNNING
Active:
Yes
Modules:
api-handler:
RUNNING
https://01jac6p20m4gahn1kaa2mhm2js.raindrop.liquidmetal.ai
Error Cases:
Terminal window
# Missing required files
$
raindrop
build
deploy
Error:
Directory
validation
failed:
Missing
required
file:
package.json
Suggested
actions:
•
Run
'
raindrop build init
'
to
initialize
project
•
Ensure
you
'
re in correct directory
# Locked state prevents deployment
$ raindrop build deploy
Error: Operation not allowed: application is in a locked state
Status Command
Syntax:
raindrop build status
Show deployment status and health of application.
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-a, --application <name>
- Specific application name
-v, --version <id>
- Specific version ID
-o, --output <format>
- Output format: watch, table, json, compact (default: compact)
Behavior:
Queries Raindrop catalog for application status. Shows module states and URLs. Compact format shows summary information. Watch format refreshes status continuously. Table format shows detailed module information.
Fails with exit code 1 if application not found in catalog.
Example Output:
Terminal window
$
raindrop
build
status
hello-world@01jac6p20m4gahn1kaa2mhm2js
Status:
RUNNING
Active:
Yes
Modules:
api-handler:
RUNNING
https://01jac6p20m4gahn1kaa2mhm2js.raindrop.liquidmetal.ai
$
raindrop
build
status
-o
table
┌─────────────┬─────────┬─────────────────────────────────────────────────┐
│
Module
│
Status
│
URLs
│
├─────────────┼─────────┼─────────────────────────────────────────────────┤
│
api-handler
│
RUNNING
│
https://01jac6p20m4gahn1kaa2mhm2js.raindrop...
│
└─────────────┴─────────┴─────────────────────────────────────────────────┘
Error Cases:
Terminal window
# Application not found
$
raindrop
build
status
-a
nonexistent
Error:
[not_found] Application not found
Start Command
Syntax:
raindrop build start
Start a deployed application.
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-a, --application <name>
- Application to start
-v, --version <id>
- Version to start
Behavior:
Sets application version as active in catalog. Application must already be deployed. Fails if application is in locked state.
Example Output:
Terminal window
$
raindrop
build
start
Set
hello-world@01jac6p20m4gahn1kaa2mhm2js
as
active.
Error Cases:
Terminal window
# Locked state prevents operation
$
raindrop
build
start
Error:
Operation
not
allowed:
application
is
in
a
locked
state
# Version not specified
$
raindrop
build
start
Error:
Expected
a
--version
flag
to
be
provided
when
a
version
is
not
currently
set
Stop Command
Syntax:
raindrop build stop
Stop a running application.
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-a, --application <name>
- Application to stop
-v, --version <id>
- Version to stop
Behavior:
Sets application version as inactive in catalog. Application remains deployed but stops serving traffic. Fails if application is in locked state.
Example Output:
Terminal window
$
raindrop
build
stop
Set
hello-world@01jac6p20m4gahn1kaa2mhm2js
as
stopped.
Error Cases:
Terminal window
# Locked state prevents operation
$
raindrop
build
stop
Error:
Operation
not
allowed:
application
is
in
a
locked
state
Branch Command
Syntax:
raindrop build branch <branch>
Create new version branch from existing version.
Arguments:
<branch>
- Branch name (required)
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-o, --output <dir>
- Output directory (default: dist)
-p, --versionId <id>
- Branch from this version (default: current version)
--start
- Start application after branching
--no-watch
- Skip watching deployment status
--show
- Show current version without branching
Behavior:
Creates new version based on current or specified version. New branch is automatically marked as sandboxed. Deploys branch code and watches status. Fails if application is in locked or sandbox state.
Use branches to test changes without affecting production version. Sandboxed branches allow rapid iteration without version constraints.
Example Output:
Terminal window
$
raindrop
build
branch
feature-auth
Branching
complete,
sandboxing
the
new
branch
🔔
Branch
is
in
Sandbox
mode
📊
Watching
deployment
status...
hello-world@01jux6z20m4gbhn5kaa4mcm2jr
Status:
RUNNING
Active:
No
$
raindrop
build
branch
--show
Current
versionId:
01jac6p20m4gahn1kaa2mhm2js
Error Cases:
Terminal window
# Locked state prevents branching
$
raindrop
build
branch
new-feature
Error:
Operation
not
allowed:
application
is
in
a
locked
state
# Already in sandbox mode
$
raindrop
build
branch
another-feature
Error:
Branching
is
not
allowed
in
sandbox
mode
Checkout Command
Syntax:
raindrop build checkout [version]
Switch current context to specific version.
Arguments:
[version]
- Version ID to switch to (omit to show current version)
Flags:
-o, --output <format>
- Output format: text, json (default: text)
Behavior:
Changes the active version in local configuration. Does not affect deployed applications. Subsequent commands operate on the checked-out version. Fails if application is in locked state.
Use checkout to switch between production and development versions. Local configuration persists across terminal sessions.
Example Output:
Terminal window
$
raindrop
build
checkout
Currently
on
version
01jac6p20m4gahn1kaa2mhm2js
$
raindrop
build
checkout
01jux6z20m4gbhn5kaa4mcm2jr
Switched
to
version
01jux6z20m4gbhn5kaa4mcm2jr
$
raindrop
build
checkout
-o
json
{
"versionId"
:
"
01jux6z20m4gbhn5kaa4mcm2jr
"
}
Error Cases:
Terminal window
# Locked state prevents checkout
$
raindrop
build
checkout
01jux6z20m4gbhn5kaa4mcm2jr
Error:
Operation
not
allowed:
application
is
in
a
locked
state
# No version set
$
raindrop
build
checkout
No
version
set
Delete Command
Syntax:
raindrop build delete [application]
Delete application versions from catalog.
Arguments:
[application]
- Application name (default: from manifest)
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-o, --output <format>
- Output format: text, table, json (default: table)
-v, --version <id>
- Specific version to delete (default: current version)
-a, --all
- Delete all versions of application
Behavior:
Removes application version from catalog. Deletes associated resources and configuration. The
--all
and
--version
flags are mutually exclusive. Defaults to current version if no flags specified.
Use delete to clean up unused development branches. Production versions should be deleted with caution.
Example Output:
Terminal window
$
raindrop
build
delete
--version
01jux6z20m4gbhn5kaa4mcm2jr
Deleted
hello-world
at
version
01jux6z20m4gbhn5kaa4mcm2jr
$
raindrop
build
delete
--all
Deleted
all
versions
of
hello-world
Error Cases:
Terminal window
# Cannot use both flags
$
raindrop
build
delete
--version
01jux6z20m4gbhn5kaa4mcm2jr
--all
Error:
--version
and
--all
flags
are
mutually
exclusive
# Application not found
$
raindrop
build
delete
nonexistent
Error:
Failed
to
delete
application
nonexistent:
Application
not
found
Validate Command
Syntax:
raindrop build validate
Run TypeScript type checking and build handlers.
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-o, --output <dir>
- Output directory (default: dist)
Behavior:
Runs TypeScript compiler in check mode (
tsc --noEmit
). Builds handler bundles to verify code compiles. Does not deploy or modify deployed applications. Fails with exit code 1 if type errors detected.
Use validate before deploying to catch type errors early. This command runs faster than full deployment.
Example Output:
Terminal window
$
raindrop
build
validate
Using
@liquidmetal-ai/raindrop-framework
version
1.2.3
Running
type
check...
Type
check
passed
Error Cases:
Terminal window
# Type errors detected
$
raindrop
build
validate
Using
@liquidmetal-ai/raindrop-framework
version
1.2.3
Running
type
check...
src/handlers/api/index.ts(12,5
): error TS2322: Type
'
string
'
is not assignable to type
'
number
'
.
Error:
Type
check
failed.
Please
fix
the
TypeScript
errors
before
building.
Environment Variables
Set Syntax:
raindrop build env set <var> [value]
Get Syntax:
raindrop build env get <var>
Manage environment variables and secrets for deployed applications.
Arguments:
<var>
- Variable name in format
env:KEY
or
handler:env:KEY
[value]
- Variable value (use
-
to read from stdin)
Flags:
-r, --root <path>
- Project root directory (default: current directory)
-M, --manifest <file>
- Manifest file name (default: raindrop.manifest)
-v, --version <id>
- Version ID (default: current version)
-a, --application <name>
- Application name (default: from manifest)
Behavior:
Sets or retrieves environment variables for specific version. Variables defined as secrets in manifest are encrypted. Use stdin input (
-
) for multiline values or sensitive data. Changes take effect on next deployment amend.
Variable format uses colon-separated paths. Application-level variables use
env:KEY
. Handler-specific variables use
handler-name:env:KEY
.
Example Output:
Terminal window
$
raindrop
build
env
set
env:DATABASE_URL
postgresql://localhost/mydb
set
env:DATABASE_URL
$
raindrop
build
env
get
env:DATABASE_URL
env:DATABASE_URL
=postgresql://localhost/mydb
# Set secret from stdin
$
echo
"
secret-api-key
"
|
raindrop
build
env
set
env:API_KEY
-
reading
stdin
(ctrl+D
to
finish
)...
set
env:API_KEY
# Get secret shows hash only
$
raindrop
build
env
get
env:API_KEY
env:API_KEY
=[
hash
:
a1b2c3d4...]
Error Cases:
Terminal window
# Variable not in manifest
$
raindrop
build
env
set
env:UNDEFINED_VAR
value
Error:
variable
UNDEFINED_VAR
not
found
in
manifest
# Invalid variable format
$
raindrop
build
env
set
INVALID
value
Error:
variable
must
be
an
env
variable
or
secret
Sandbox Commands
Sandbox Syntax:
raindrop build sandbox
Unsandbox Syntax:
raindrop build unsandbox
Mark versions as sandboxed or unsandboxed in catalog.
Flags:
--manifest <file>
- Manifest file name
-v, --version <id>
- Version ID to mark
Behavior:
Sandboxed versions allow rapid iteration without version constraints. All deployments to sandboxed versions run in amend mode automatically. Branches are automatically sandboxed on creation.
Use sandbox mode for development and testing. Unsandbox when ready to create production version.
Example Output:
Terminal window
$
raindrop
build
sandbox
--version
01jux6z20m4gbhn5kaa4mcm2jr
Set
hello-world@01jux6z20m4gbhn5kaa4mcm2jr
as
sandboxed.
$
raindrop
build
unsandbox
--version
01jux6z20m4gbhn5kaa4mcm2jr
Set
hello-world@01jux6z20m4gbhn5kaa4mcm2jr
as
unsandboxed.
Examples
Complete Deployment Workflow
Deploy a new application and start it immediately:
Terminal window
# Initialize project structure
raindrop
build
init
my-app
cd
my-app
# Edit raindrop.manifest to define your application
# Add handlers, databases, services
# Generate TypeScript types and handler scaffolding
raindrop
build
generate
# Write your handler logic in src/handlers/
# Deploy and start in one command
raindrop
build
deploy
--start
# Monitor deployment progress
raindrop
build
status
This workflow accomplishes:
Creates project with default manifest
Generates type-safe code from manifest definitions
Validates manifest syntax during generation
Deploys application and watches deployment status
Starts application after successful deployment
Handle Deployment Failures
Fix missing environment variables after failed deployment:
Terminal window
# Deploy stops due to missing DATABASE_URL
raindrop
build
deploy
# Error: Missing required environment variable: DATABASE_URL
# Set the missing variable
raindrop
build
env
set
env:DATABASE_URL
postgresql://localhost/mydb
# Resume deployment without creating new version
raindrop
build
deploy
--amend
--start
This workflow accomplishes:
Detects missing environment variables during deployment
Sets variables using proper namespace format (env:KEY)
Resumes deployment in amend mode to update existing version
Starts application after configuration fix
Version Management
Create and manage application branches:
Terminal window
# Create new branch from current version
raindrop
build
branch
feature-auth
# Branch is automatically sandboxed
# Make changes to raindrop.manifest
# Deploy changes to branch
raindrop
build
deploy
# Switch back to main version
raindrop
build
checkout
01jac6p20m4gahn1kaa2mhm2js
# List all versions
raindrop
build
list
# Delete old branch
raindrop
build
delete
--version
01jux6z20m4gbhn5kaa4mcm2jr
This workflow accomplishes:
Creates isolated branch for testing changes
Enables safe experimentation in sandbox mode
Allows switching between versions without data loss
Provides cleanup commands for unused versions
Lists all available versions for reference
Exit Codes
The
raindrop build
commands return the following exit codes:
0
- Success - Command completed without errors
1
- General error - Validation failures, file not found, locked state, missing requirements, type check failures
5
- Not found - Application does not exist in catalog (status command only)
Previous
raindrop bucket
Next
raindrop dns

raindrop dns
URL: https://docs.liquidmetal.ai/reference/cli/dns/
raindrop dns
Please note you need to have your own DNS provider to use this command. For example you need to own
example.com
to create a DNS zone for it.
The
raindrop dns
command manages DNS zones and records for your domains. Create DNS zones for your domains, then add and configure DNS records (A, AAAA, CNAME, MX, TXT, etc.) to route traffic to your applications.
DNS zones are organization-scoped resources. All authenticated users in an organization can view and manage the organization’s DNS zones.
Basic Usage
Create a DNS zone:
Terminal window
raindrop
dns
create
example.com
List all DNS zones:
Terminal window
raindrop
dns
list
Zone Management
raindrop dns create
Create a new DNS zone for a domain.
Syntax:
Terminal window
raindrop
dns
create
<domain>
[--output
<format>]
Arguments:
<domain>
- Fully qualified domain name (required)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
text
Examples:
Terminal window
# Create DNS zone
raindrop
dns
create
example.com
# Create with JSON output
raindrop
dns
create
example.com
--output
json
Output:
✅ DNS zone created successfully!
Domain: example.com
Status: active
Type: full
Nameservers:
- ns1.liquidmetal.run
- ns2.liquidmetal.run
📝 Update your domain registrar to use these nameservers.
Create a partial DNS zone.
Terminal window
raindrop
dns
create
example.com
--type=partial
Output:
Terminal window
Creating
DNS
zone
for
example.com...
✅
DNS
zone
created
successfully!
Domain:
example.com
Status:
pending
Type:
custom
---
raindrop dns delete
Delete a DNS zone and all its records.
Syntax:
Terminal window
raindrop
dns
delete
<domain>
[--force]
Arguments:
<domain>
- Domain name to delete (required)
Flags:
Flag
Description
Default
-f, --force
Skip confirmation prompt
false
Examples:
Terminal window
# Delete with confirmation
raindrop
dns
delete
example.com
# Delete without confirmation
raindrop
dns
delete
example.com
--force
raindrop dns get
Get details for a specific DNS zone.
Syntax:
Terminal window
raindrop
dns
get
<domain>
[--output
<format>]
Arguments:
<domain>
- Domain name (required)
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
,
table
text
Examples:
Terminal window
# Get zone details
raindrop
dns
get
example.com
# Get as JSON
raindrop
dns
get
example.com
--output
json
Output:
Please note the Verification Key will correspond to the txt record created in your DNS provider.
Terminal window
raindrop
dns
get
example.com
DNS
Zone:
example.com
Status:
pending
Type:
custom
Verification
Key:
<VERIFICATION_KEY>
//
Verification
via
your
txt
record
Timestamps:
Created:
<DATETIME>
Updated:
<DATETIME>
raindrop dns list
List all DNS zones in your organization.
Syntax:
Terminal window
raindrop
dns
list
[--output
<format>]
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
,
table
table
Examples:
Terminal window
# List zones in table format
raindrop
dns
list
# List as JSON
raindrop
dns
list
--output
json
Output:
┌─────────────┬────────┬──────┬─────────────────────┐
│ Domain      │ Status │ Type │ Nameservers         │
├─────────────┼────────┼──────┼─────────────────────┤
│ example.com │ active │ full │ ns1.liquidmetal.run │
│             │        │      │ ns2.liquidmetal.run │
└─────────────┴────────┴──────┴─────────────────────┘
Common Workflows
Setting Up a New Domain
Configure DNS for a new domain:
Terminal window
# Create DNS zone
raindrop
dns
create
example.com
# Update nameservers at your registrar to those shown in output
# (ns1.liquidmetal.run, ns2.liquidmetal.run)
## Exit Codes
|
Code
|
Description
|
|
------
|
-------------
|
|
0
|
Command
completed
successfully
|
|
1
|
General
error
(invalid
domain,
zone
not
found,
etc.
)
|
|
2
|
Invalid
arguments
|
Previous
raindrop build
Next
raindrop logs

raindrop logs
URL: https://docs.liquidmetal.ai/reference/cli/logs/
raindrop logs
The
raindrop logs
command provides access to logs from your deployed applications. You can query historical logs with time range filtering or stream logs in real-time as they occur.
The command includes two subcommands:
query
retrieves logs from a specific time period, and
tail
streams logs continuously. Both subcommands automatically detect your application and version from your manifest and configuration files when not explicitly specified.
Use logs to debug issues, monitor application behavior, trace request flows, and analyze errors. Filter by time range, trace ID, or status to find exactly what you need.
Note
Run this command from within your Raindrop project directory. The command reads your
raindrop.manifest
and configuration files to auto-detect the application and version. You can also specify
--application
and
--version
flags to query logs for any deployed application without being in its project directory.
Basic Usage
View logs from the last hour:
Terminal window
raindrop
logs
query
Stream logs in real-time:
Terminal window
raindrop
logs
tail
Command Syntax
Terminal window
raindrop
logs
query
[--application
<name>]
[--version
<id>]
[--output
<format>]
[--startTime <time>] [--endTime <time>] [--last <duration>]
[--limit <number>] [--traceId <id>] [--status <status>]
raindrop
logs
tail
[--application
<name>]
[--version
<id>]
[--output
<format>]
Query Historical Logs
The
query
subcommand retrieves logs from a specified time range. The command defaults to the last hour if you provide no time parameters.
Flags
--application, -a <name>
- Application name (auto-detected from manifest if omitted)
--version, -v <id>
- Version ID (auto-detected from config if omitted)
--output, -o <format>
- Output format:
text
or
json
(default:
text
)
--startTime, -s <time>
- Start time as Unix timestamp in milliseconds or ISO 8601 string
--endTime, -e <time>
- End time as Unix timestamp in milliseconds or ISO 8601 string
--last, -l <duration>
- Query logs from the last duration (e.g.,
1h
,
30m
,
2d
)
--limit, -n <number>
- Maximum number of log entries to return (default:
100
)
--traceId <id>
- Filter logs by trace ID to follow a specific request
--status <status>
- Filter logs by status:
ok
or
error
Duration Format
Specify durations using these units:
s
- seconds (e.g.,
30s
)
m
- minutes (e.g.,
15m
)
h
- hours (e.g.,
2h
)
d
- days (e.g.,
7d
)
Time Format
Provide timestamps in either format:
Unix timestamp in milliseconds:
1727702821000
ISO 8601 string:
2025-09-30T12:00:00Z
Time Range Logic
The command determines the time range using this priority:
Explicit
--startTime
and
--endTime
flags
Duration from
--last
flag (relative to current time)
Default: last 1 hour if no flags provided
Stream Real-Time Logs
The
tail
subcommand streams logs continuously as your application generates them. Press Ctrl+C to stop streaming.
Flags
--application, -a <name>
- Application name (auto-detected from manifest if omitted)
--version, -v <id>
- Version ID (auto-detected from config if omitted)
--output, -o <format>
- Output format:
text
or
json
(default:
text
)
Response Types
The streaming connection sends these message types:
heartbeat
- Connection health checks (skipped in text output)
stream_started
- Confirms stream initialization
events
- Log entries grouped by trace ID
stream_ended
- Indicates normal stream termination
service_error
- Reports streaming service errors
Text mode displays control messages with status indicators and groups events by trace ID.
Examples
View Recent Logs
Query logs from the last 30 minutes:
Terminal window
raindrop
logs
query
--last
30m
Query logs from the last 7 days with a 500-entry limit:
Terminal window
raindrop
logs
query
--last
7d
--limit
500
Query Specific Time Range
Query logs between two timestamps:
Terminal window
raindrop
logs
query
--startTime
2025-09-30T10:00:00Z
--endTime
2025-09-30T11:00:00Z
Query logs starting from a Unix timestamp:
Terminal window
raindrop
logs
query
--startTime
1727697600000
Filter Logs
Find all error logs from the last hour:
Terminal window
raindrop
logs
query
--status
error
Follow a specific request by trace ID:
Terminal window
raindrop
logs
query
--traceId
trace_abc123def456
Query errors for a specific application version:
Terminal window
raindrop
logs
query
--application
my-api
--version
01jk3m4n5p6q7r8s9t0u1v2w3x
--status
error
Export Logs
Export logs in JSON format for analysis:
Terminal window
raindrop
logs
query
--last
24h
--output
json
>
logs.json
Export error logs from the last week:
Terminal window
raindrop
logs
query
--last
7d
--status
error
--output
json
>
errors.json
Stream Real-Time Logs
Stream logs as they occur:
Terminal window
raindrop
logs
tail
Stream logs for a specific application in JSON format:
Terminal window
raindrop
logs
tail
--application
my-api
--output
json
Exit Codes
0
- Command completed successfully
1
- Command failed (invalid duration format, query/tail failed, missing version/application in config)
2
- Invalid arguments provided (nonexistent flags)
Previous
raindrop dns
Next
raindrop mcp

raindrop mcp
URL: https://docs.liquidmetal.ai/reference/cli/mcp/
raindrop mcp
The
raindrop mcp
commands integrate Raindrop with AI coding assistants through Model Context Protocol (MCP). Install Raindrop support for Claude Code to build and manage Raindrop applications with AI assistance.
MCP integration provides:
Context-aware assistance
- AI assistants understand your Raindrop project structure
Slash commands/recipes
- Quick workflows for common tasks
Session management
- Resume previous development sessions
Manifest generation
- AI-assisted raindrop.manifest creation
Supported AI Assistants
Assistant
Install Command
Requirements
Claude Code
raindrop mcp install-claude
Claude Code
Prerequisites
Before installing MCP integration:
Authenticate with Raindrop
:
Terminal window
raindrop
auth
login
Install target AI assistant
(Claude Code)
Verify installation
:
Terminal window
# For Claude
claude
--version
Command Reference
raindrop mcp status
Check MCP integration status for all supported AI assistants.
Syntax:
Terminal window
raindrop
mcp
status
[--output
<format>]
Flags:
Flag
Description
Values
Default
-o, --output
Output format
text
,
json
text
Examples:
Terminal window
# Check status
raindrop
mcp
status
# Get status as JSON
raindrop
mcp
status
--output
json
Output:
Raindrop MCP Integration Status
Claude Code:
Status: Installed
MCP Server: raindrop-mcp
Slash Commands: 3 installed
- /new-raindrop-app
- /update-raindrop-app
- /reattach-raindrop-session
raindrop mcp install-claude
Install complete Raindrop integration for Claude Code IDE.
Syntax:
Terminal window
raindrop
mcp
install-claude
Flags:
None (uses default configuration)
Examples:
Terminal window
raindrop
mcp
install-claude
What Gets Installed:
MCP Server Configuration
Adds
raindrop-mcp
server to Claude Code’s MCP configuration
Configures authentication using your Raindrop credentials
Location:
~/.claude/mcp_servers.json
Slash Commands
(in
~/.claude/commands/
):
/new-raindrop-app
- Start new Raindrop application development
/update-raindrop-app
- Update existing Raindrop applications
/reattach-raindrop-session
- Resume previous development sessions
Output:
Installing Raindrop integration for Claude Code...
✓ Checking Claude Code installation
✓ Verifying Raindrop authentication
✓ Adding raindrop-mcp server to MCP configuration
✓ Creating slash commands:
- /new-raindrop-app
- /update-raindrop-app
- /reattach-raindrop-session
Installation complete!
Try it out:
1. Open Claude Code
2. Type /new-raindrop-app to start a new project
3. Follow the AI-guided workflow
Using MCP Integration
Starting a New Project
With Claude Code:
1. Open Claude Code
2. Type: /new-raindrop-app
3. Follow the prompts:
- Application name
- Template selection
- Initial configuration
Claude will:
- Generate raindrop.manifest
- Create project structure
- Set up handlers
- Initialize git repository
Updating an Existing Application
With Claude Code:
1. Open project directory in Claude Code
2. Type: /update-raindrop-app
3. Describe the changes you want:
"Add a new HTTP handler for user authentication"
"Configure a PostgreSQL database"
"Add environment variables for API keys"
Claude will:
- Analyze current manifest
- Suggest changes
- Update manifest
- Generate/update code
- Run build/deploy if requested
Resuming a Session
All assistants support session resumption for continuing previous work:
Claude Code:
/reattach-raindrop-session
Claude will:
- Load previous session context
- Show last actions taken
- Continue where you left off
MCP Capabilities
When MCP integration is installed, AI assistants can:
Project Understanding
Read and parse
raindrop.manifest
Understand application structure
Identify handlers, databases, services
Map dependencies
Code Generation
Generate handler implementations
Create type definitions
Write database schemas
Build configuration files
Manifest Management
Create new manifests from scratch
Validate manifest syntax
Suggest configuration improvements
Add new resources
Build and Deploy
Run
raindrop build generate
Execute
raindrop build deploy
Monitor deployment status
Handle errors and retry
Context Preservation
Remember previous commands
Track changes made
Maintain session state
Resume interrupted work
Troubleshooting
Installation Issues
“Claude Code not found”:
Terminal window
# Install Claude Code
# Download from: https://claude.com/download
# Verify installation
claude
--version
“Not authenticated with Raindrop”:
Terminal window
# Log in first
raindrop
auth
login
# Verify authentication
raindrop
auth
list
“MCP server already exists”:
The installation detected an existing raindrop-mcp server.
This prevents duplicate installations.
To reinstall:
1. Remove existing configuration manually
2. Run install command again
Runtime Issues
Slash commands not appearing:
Terminal window
# Restart your AI assistant
# For Claude Code:
# Close and reopen the application
# Verify installation
raindrop
mcp
status
“Permission denied” errors:
Terminal window
# Check file permissions
ls
-la
~/.claude/commands/
# Fix permissions if needed
chmod
755
~/.claude/commands/
*
.md
MCP server not responding:
Terminal window
# Check Raindrop authentication
raindrop
auth
list
# Re-authenticate if needed
raindrop
auth
logout
raindrop
auth
login
# Reinstall MCP integration
raindrop
mcp
install-claude
Uninstallation
To remove MCP integration:
Claude Code:
~/.claude/mcp_servers.json
# Remove MCP server from configuration
# Remove raindrop-mcp entry
# Remove slash commands
rm
~/.claude/commands/new-raindrop-app.md
rm
~/.claude/commands/update-raindrop-app.md
rm
~/.claude/commands/reattach-raindrop-session.md
Best Practices
Development Workflow:
Start new projects with
/new-raindrop-app
for proper setup
Use
/update-raindrop-app
for iterative changes
Leverage session resumption for long-running tasks
Let AI handle boilerplate code generation
Collaboration:
Share AI-generated manifests with team
Review AI suggestions before applying
Use version control for all AI-generated code
Document AI-assisted changes in commits
Security:
Never commit credentials or secrets
Review AI-generated environment variable configurations
Validate MCP server connections
Keep AI assistant software updated
Exit Codes
Code
Description
0
Command completed successfully
1
Installation failed (AI assistant not found, not authenticated, etc.)
2
Invalid arguments
Previous
raindrop logs
Next
raindrop object

raindrop object
URL: https://docs.liquidmetal.ai/reference/cli/object/
raindrop object
The
raindrop object
command performs object storage operations on Raindrop buckets. Upload files, download objects, delete objects, and list bucket contents directly from the command line.
These commands provide direct access to bucket contents without needing S3 credentials. Use them for quick operations, scripting, and automation.
Bucket Version Syntax
Specify bucket versions using the
#
separator:
Terminal window
--bucket
my-bucket
# Uses version from config
--bucket
my-bucket#v1.0.0
# Uses specific version
Basic Usage
Upload a file:
Terminal window
raindrop
object
put
myfile.txt
./local-file.txt
--bucket
my-bucket
Download a file:
Terminal window
raindrop
object
get
myfile.txt
--bucket
my-bucket
--output
./local-file.txt
List bucket contents:
Terminal window
raindrop
object
list
--bucket
my-bucket
Delete an object:
Terminal window
raindrop
object
delete
myfile.txt
--bucket
my-bucket
Command Reference
raindrop object get
Download an object from a bucket.
Syntax:
Terminal window
raindrop
object
get
<key>
--bucket
<bucket>
[--output
<path>]
Arguments:
<key>
- Object key (path) in bucket (required)
Flags:
Flag
Description
Required
Default
-b, --bucket
Bucket name (with optional version)
Yes
-
-o, --output
Output file path
No
stdout
Examples:
Terminal window
# Download to stdout
raindrop
object
get
myfile.txt
--bucket
my-bucket
# Download to file
raindrop
object
get
myfile.txt
--bucket
my-bucket
--output
./local-file.txt
# Download from specific version
raindrop
object
get
myfile.txt
--bucket
my-bucket#v1.0.0
--output
./file.txt
# Download from nested path
raindrop
object
get
images/photo.jpg
--bucket
my-bucket
--output
./photo.jpg
Behavior:
Without
--output
, content is written to stdout. This works well for text files but may produce binary output for other file types.
raindrop object put
Upload a file to a bucket.
Syntax:
Terminal window
raindrop
object
put
<key>
<file>
--bucket
<bucket>
[--content-type
<type>]
Arguments:
<key>
- Object key (path) in bucket (required)
<file>
- Local file path to upload (required)
Flags:
Flag
Description
Required
Default
-b, --bucket
Bucket name (with optional version)
Yes
-
--content-type
MIME content type
No
Auto-detected
Examples:
Terminal window
# Upload file
raindrop
object
put
myfile.txt
./local-file.txt
--bucket
my-bucket
# Upload with content type
raindrop
object
put
data.json
./data.json
--bucket
my-bucket
--content-type
application/json
# Upload to specific version
raindrop
object
put
file.txt
./file.txt
--bucket
my-bucket#v1.0.0
# Upload to nested path
raindrop
object
put
images/photo.jpg
./photo.jpg
--bucket
my-bucket
# Upload with explicit content type
raindrop
object
put
archive.bin
./data.bin
--bucket
my-bucket
--content-type
application/octet-stream
Content Type Detection:
If
--content-type
is not specified, the CLI attempts to detect the MIME type from the file extension:
.txt
→
text/plain
.json
→
application/json
.html
→
text/html
.jpg
,
.jpeg
→
image/jpeg
.png
→
image/png
.pdf
→
application/pdf
For binary files or unknown extensions, specify
--content-type
explicitly.
raindrop object delete
Delete an object from a bucket.
Syntax:
Terminal window
raindrop
object
delete
<key>
--bucket
<bucket>
[--force]
Arguments:
<key>
- Object key (path) to delete (required)
Flags:
Flag
Description
Required
Default
-b, --bucket
Bucket name (with optional version)
Yes
-
-f, --force
Skip confirmation prompt
No
false
Examples:
Terminal window
# Delete with confirmation
raindrop
object
delete
myfile.txt
--bucket
my-bucket
# Delete without confirmation
raindrop
object
delete
myfile.txt
--bucket
my-bucket
--force
# Delete from specific version
raindrop
object
delete
myfile.txt
--bucket
my-bucket#v1.0.0
--force
# Delete from nested path
raindrop
object
delete
images/photo.jpg
--bucket
my-bucket
--force
Behavior:
Deletion is permanent and cannot be undone. Always use
--force
carefully in scripts to avoid accidental data loss.
raindrop object list
List objects in a bucket.
Syntax:
Terminal window
raindrop
object
list
--bucket
<bucket>
[--prefix
<prefix>]
[--output
<format>]
Flags:
Flag
Description
Required
Default
-b, --bucket
Bucket name (with optional version)
Yes
-
--prefix
Filter by key prefix
No
-
-o, --output
Output format
No
table
Output Formats:
table
- Formatted table with columns
text
- Plain text with details per object
json
- JSON array of objects
Examples:
Terminal window
# List all objects
raindrop
object
list
--bucket
my-bucket
# List with prefix filter
raindrop
object
list
--bucket
my-bucket
--prefix
images/
# List from specific version
raindrop
object
list
--bucket
my-bucket#v1.0.0
# List as JSON
raindrop
object
list
--bucket
my-bucket
--output
json
# List text files only
raindrop
object
list
--bucket
my-bucket
--prefix
documents/
--output
table
Output (table format):
┌──────────────────────┬──────────┬──────────────────┬──────────────────────────┐
│ Key                  │ Size     │ Content-Type     │ Last Modified            │
├──────────────────────┼──────────┼──────────────────┼──────────────────────────┤
│ myfile.txt           │ 1024     │ text/plain       │ 2025-10-23T10:30:00.000Z │
│ data.json            │ 512      │ application/json │ 2025-10-23T11:45:00.000Z │
│ images/photo.jpg     │ 204800   │ image/jpeg       │ 2025-10-23T09:15:00.000Z │
└──────────────────────┴──────────┴──────────────────┴──────────────────────────┘
Output (text format):
Key: myfile.txt
Size: 1024 bytes
Content-Type: text/plain
Last Modified: 2025-10-23T10:30:00.000Z
---
Key: data.json
Size: 512 bytes
Content-Type: application/json
Last Modified: 2025-10-23T11:45:00.000Z
---
Common Workflows
Uploading Files
Upload single files or multiple files:
Terminal window
# Upload single file
raindrop
object
put
README.md
./README.md
--bucket
docs
# Upload with proper content type
raindrop
object
put
api/schema.json
./schema.json
--bucket
docs
--content-type
application/json
# Upload multiple files (bash loop)
for
file
in
*.txt
;
do
raindrop
object
put
"
docs/
$file
"
"
$file
"
--bucket
my-bucket
done
Downloading Files
Download files for backup or local processing:
Terminal window
# Download single file
raindrop
object
get
report.pdf
--bucket
documents
--output
./report.pdf
# Download all objects with prefix (requires list + loop)
raindrop
object
list
--bucket
my-bucket
--prefix
images/
--output
json
|
\
jq
-r
'
.[].key
'
|
\
while
read
key
;
do
raindrop
object
get
"
$key
"
--bucket
my-bucket
--output
"
./
$key
"
done
Organizing Objects
Use prefixes to organize objects in a hierarchy:
Terminal window
# Upload to different "directories"
raindrop
object
put
public/index.html
./index.html
--bucket
website
raindrop
object
put
public/styles/main.css
./main.css
--bucket
website
raindrop
object
put
assets/images/logo.png
./logo.png
--bucket
website
# List by directory
raindrop
object
list
--bucket
website
--prefix
public/
raindrop
object
list
--bucket
website
--prefix
assets/images/
Syncing Content
Replace updated files:
Terminal window
# Check existing file
raindrop
object
get
config.json
--bucket
my-app
--output
old-config.json
# Upload new version
raindrop
object
put
config.json
./new-config.json
--bucket
my-app
# Verify upload
raindrop
object
get
config.json
--bucket
my-app
--output
verify-config.json
Cleaning Up
Delete old or unwanted objects:
Terminal window
# List objects to identify candidates for deletion
raindrop
object
list
--bucket
my-bucket
--output
table
# Delete specific object
raindrop
object
delete
old-data.csv
--bucket
my-bucket
--force
# Delete multiple objects (bash loop)
for
key
in
file1.txt
file2.txt
file3.txt
;
do
raindrop
object
delete
"
$key
"
--bucket
my-bucket
--force
done
Backup and Restore
Create backups of bucket contents:
Terminal window
# Backup: Download all objects
mkdir
-p
backup
raindrop
object
list
--bucket
my-bucket
--output
json
|
\
jq
-r
'
.[].key
'
|
\
while
read
key
;
do
mkdir
-p
"
backup/$(
dirname
"
$key
"
)
"
raindrop
object
get
"
$key
"
--bucket
my-bucket
--output
"
backup/
$key
"
done
# Restore: Upload from backup
find
backup
-type
f
|
while
read
file
;
do
key
=
"
${
file
#
backup
/
}
"
raindrop
object
put
"
$key
"
"
$file
"
--bucket
my-bucket
done
Scripting Examples
Bulk Upload Script
#!/bin/bash
# upload-directory.sh - Upload entire directory to bucket
BUCKET
=
"
my-bucket
"
LOCAL_DIR
=
"
./data
"
PREFIX
=
"
uploaded
"
find
"
$LOCAL_DIR
"
-type
f
|
while
read
file
;
do
relative_path
=
"
${
file
#
$LOCAL_DIR
/
}
"
key
=
"
$PREFIX
/
$relative_path
"
echo
"
Uploading:
$key
"
raindrop
object
put
"
$key
"
"
$file
"
--bucket
"
$BUCKET
"
done
echo
"
Upload complete!
"
Download with Progress
#!/bin/bash
# download-objects.sh - Download objects with progress
BUCKET
=
"
my-bucket
"
OUTPUT_DIR
=
"
./downloads
"
mkdir
-p
"
$OUTPUT_DIR
"
# Get list of objects
objects
=
$(
raindrop
object
list
--bucket
"
$BUCKET
"
--output
json
|
jq
-r
'
.[].key
'
)
total
=
$(
echo
"
$objects
"
|
wc
-l
)
current
=
0
echo
"
$objects
"
|
while
read
key
;
do
current
=
$((
current
+
1
))
echo
"
[
$current
/
$total
] Downloading:
$key
"
# Create directory structure
mkdir
-p
"
$OUTPUT_DIR
/$(
dirname
"
$key
"
)
"
# Download object
raindrop
object
get
"
$key
"
--bucket
"
$BUCKET
"
--output
"
$OUTPUT_DIR
/
$key
"
done
echo
"
Download complete!
"
Conditional Upload
#!/bin/bash
# conditional-upload.sh - Upload only if file doesn't exist or is newer
BUCKET
=
"
my-bucket
"
LOCAL_FILE
=
"
./data.json
"
REMOTE_KEY
=
"
data.json
"
# Check if object exists
if
raindrop
object
get
"
$REMOTE_KEY
"
--bucket
"
$BUCKET
"
>
/tmp/remote-file
2>
/dev/null
;
then
echo
"
Object exists, comparing...
"
# Compare files (simplified - just check size)
local_size
=
$(
wc
-c
<
"
$LOCAL_FILE
"
)
remote_size
=
$(
wc
-c
<
/tmp/remote-file
)
if
[
"
$local_size
"
-ne
"
$remote_size
"
];
then
echo
"
File changed, uploading...
"
raindrop
object
put
"
$REMOTE_KEY
"
"
$LOCAL_FILE
"
--bucket
"
$BUCKET
"
else
echo
"
File unchanged, skipping upload
"
fi
else
echo
"
Object doesn't exist, uploading...
"
raindrop
object
put
"
$REMOTE_KEY
"
"
$LOCAL_FILE
"
--bucket
"
$BUCKET
"
fi
rm
-f
/tmp/remote-file
Performance Tips
Upload Performance:
Use appropriate
--content-type
to avoid detection overhead
Upload larger files during off-peak hours
Consider parallel uploads for multiple files (use
&
in bash)
Download Performance:
Download to local disk (SSD preferred) for best performance
Use
--output
instead of redirecting stdout for large files
Consider downloading in parallel for multiple objects
Listing Performance:
Use
--prefix
to narrow down results
Use JSON output (
--output json
) for programmatic processing
Cache list results when performing multiple operations
Exit Codes
Code
Description
0
Command completed successfully
1
General error (bucket not found, object not found, upload failed, etc.)
2
Invalid arguments
Previous
raindrop mcp
Next
raindrop query

raindrop query
URL: https://docs.liquidmetal.ai/reference/cli/query/
raindrop query
The
raindrop query
commands perform intelligent search and Retrieval Augmented Generation (RAG) operations on Raindrop smart buckets. Search across documents, chat with specific files, query application events, and manage search indexes.
Smart buckets automatically index uploaded content for semantic search. Use query commands to leverage this intelligence for document search, Q&A, and knowledge retrieval.
Command Categories
Search
- Natural language search across buckets
Chunk Search
- RAG-based search with context retrieval
Document Chat
- Interactive Q&A with specific documents
Event Query
- Application event streaming
Reindex
- Rebuild search indexes
Basic Usage
Search for documents:
Terminal window
raindrop
query
search
"
machine learning tutorials
"
--buckets
docs
RAG search with chunks:
Terminal window
raindrop
query
chunk-search
"
What is LiquidMetal?
"
--buckets
knowledge-base
Chat with a document:
Terminal window
raindrop
query
document
"
Summarize this
"
--bucket
docs
--object-id
report.pdf
Command Reference
raindrop query search
Natural language search across smart buckets.
Syntax:
Terminal window
raindrop
query
search
[query] --buckets <bucket>... [--page <number>] [--request-id <id>] [--output <format>]
Arguments:
[query]
- Search query text (optional for pagination)
Flags:
Flag
Description
Required
Default
-b, --buckets
Bucket names (multiple)
Yes
-
--request-id
Request ID for pagination
No
-
--page
Page number
No
1
-o, --output
Output format
No
text
-m, --manifest
Manifest file path
No
raindrop.manifest
Examples:
Terminal window
# Search single bucket
raindrop
query
search
"
API documentation
"
--buckets
docs
# Search multiple buckets
raindrop
query
search
"
authentication
"
--buckets
docs
tutorials
examples
# Search with specific version
raindrop
query
search
"
deployment
"
--buckets
docs#v1.0.0
# Get results as JSON
raindrop
query
search
"
configuration
"
--buckets
docs
--output
json
# Paginate results (use request-id from previous response)
raindrop
query
search
--request-id
req_abc123
--page
2
--buckets
docs
Output (text):
Search Results for: "API documentation"
Buckets: docs
Found 5 results:
1. api-reference.md
Score: 0.89
Preview: "Complete API reference for all endpoints..."
Location: docs/api-reference.md
2. getting-started.md
Score: 0.76
Preview: "Getting started with the API. First, authenticate..."
Location: docs/getting-started.md
3. authentication.md
Score: 0.72
Preview: "API authentication uses Bearer tokens..."
Location: docs/authentication.md
Request ID: req_abc123 (use for pagination)
Output (JSON):
{
"requestId"
:
"
req_abc123
"
,
"results"
: [
{
"key"
:
"
api-reference.md
"
,
"score"
:
0.89
,
"preview"
:
"
Complete API reference for all endpoints...
"
,
"location"
:
"
docs/api-reference.md
"
,
"metadata"
: {
"size"
:
15420
,
"lastModified"
:
"
2025-10-23T10:30:00.000Z
"
}
}
],
"hasMore"
:
true
,
"page"
:
1
}
raindrop query chunk-search
RAG search with semantic chunking and context retrieval.
Syntax:
Terminal window
raindrop
query
chunk-search
<query>
--buckets
<bucket>...
[--output
<format>]
Arguments:
<query>
- Search query (required)
Flags:
Flag
Description
Required
Default
-b, --buckets
Bucket names (multiple)
Yes
-
-o, --output
Output format
No
text
-m, --manifest
Manifest file path
No
raindrop.manifest
Examples:
Terminal window
# RAG search single bucket
raindrop
query
chunk-search
"
What is LiquidMetal?
"
--buckets
knowledge-base
# Search multiple buckets
raindrop
query
chunk-search
"
How do I deploy?
"
--buckets
docs
tutorials
# JSON output
raindrop
query
chunk-search
"
Configuration options
"
--buckets
docs
--output
json
Output:
Chunk Search Results for: "What is LiquidMetal?"
Found 3 relevant chunks:
Chunk 1 (Score: 0.94)
Source: introduction.md
LiquidMetal is a serverless platform for building intelligent applications.
It provides built-in support for AI, databases, and smart storage.
...
Chunk 2 (Score: 0.87)
Source: overview.md
The platform handles infrastructure provisioning, scaling, and monitoring
automatically, letting you focus on application logic.
...
Chunk 3 (Score: 0.82)
Source: getting-started.md
Getting started with LiquidMetal is simple. First, install the CLI...
RAG vs Regular Search:
Feature
chunk-search (RAG)
search
Context
Returns text chunks with context
Returns document references
Use Case
Question answering, summaries
Document discovery
Processing
Semantic chunking
Full document matching
Output
Text excerpts
Document metadata
raindrop query document
Interactive Q&A with a specific document.
Syntax:
Terminal window
raindrop
query
document
<query>
--bucket
<bucket>
--object-id
<id>
[--output
<format>]
Arguments:
<query>
- Question about the document (required)
Flags:
Flag
Description
Required
Default
-b, --bucket
Bucket name
Yes
-
--object-id
Object ID (file path)
Yes
-
-o, --output
Output format
No
text
-m, --manifest
Manifest file path
No
raindrop.manifest
Examples:
Terminal window
# Ask question about document
raindrop
query
document
"
What is the main topic?
"
\
--bucket
docs
\
--object-id
report.pdf
# Summarize document
raindrop
query
document
"
Summarize this document
"
\
--bucket
docs
\
--object-id
whitepaper.pdf
# Extract specific information
raindrop
query
document
"
What are the key findings?
"
\
--bucket
research
\
--object-id
study-2024.pdf
# JSON output
raindrop
query
document
"
List all recommendations
"
\
--bucket
docs
\
--object-id
guidelines.pdf
\
--output
json
Output:
Question: "What is the main topic?"
Document: report.pdf (bucket: docs)
Answer:
The main topic of this document is the architectural design of the LiquidMetal
platform, focusing on the actor model implementation and resource management
strategies. The document outlines three key components: the runtime engine,
the catalog service, and the deployment pipeline.
Sources:
- Page 1: Introduction (lines 1-15)
- Page 3: Architecture Overview (lines 45-78)
- Page 5: Component Details (lines 120-145)
raindrop query events
Stream and query Raindrop application events.
Syntax:
Terminal window
raindrop
query
events
[--application
<name>]
[--version-id
<id>]
[--output
<format>]
Flags:
Flag
Description
Required
Default
-a, --application
Application name
No
From manifest
-v, --version-id
Version ID
No
From config
-o, --output
Output format
No
table
-m, --manifest
Manifest file path
No
raindrop.manifest
Examples:
Terminal window
# Query events for current app/version
raindrop
query
events
# Query specific application
raindrop
query
events
--application
my-app
# Query specific version
raindrop
query
events
--application
my-app
--version-id
v1.0.0
# JSON output
raindrop
query
events
--output
json
Output (table):
┌──────────────────────┬──────────┬─────────────────────────────┬──────────────────────────┐
│ Event ID             │ Type     │ Message                     │ Timestamp                │
├──────────────────────┼──────────┼─────────────────────────────┼──────────────────────────┤
│ evt_abc123           │ deploy   │ Deployment started          │ 2025-10-23T10:30:00.000Z │
│ evt_def456           │ build    │ Building handler bundles    │ 2025-10-23T10:30:15.000Z │
│ evt_ghi789           │ deploy   │ Deployment complete         │ 2025-10-23T10:32:00.000Z │
└──────────────────────┴──────────┴─────────────────────────────┴──────────────────────────┘
raindrop query reindex
Rebuild search index for a bucket by reprocessing all objects.
Syntax:
Terminal window
raindrop
query
reindex
--bucket
<bucket>
[--parallel
<number>]
[--dry-run]
Flags:
Flag
Description
Required
Default
-b, --bucket
Bucket name
Yes
-
--parallel
Parallel operations
No
10
-d, --dry-run
Show what would be reindexed
No
false
-m, --manifest
Manifest file path
No
raindrop.manifest
Examples:
Terminal window
# Reindex bucket
raindrop
query
reindex
--bucket
docs
# Dry run (preview)
raindrop
query
reindex
--bucket
docs
--dry-run
# Reindex with more parallelism
raindrop
query
reindex
--bucket
docs
--parallel
20
# Reindex specific version
raindrop
query
reindex
--bucket
docs#v1.0.0
Output:
Reindexing bucket: docs
Scanning objects...
Found 42 objects to reindex
Reindexing (10 parallel operations):
[██████████████████████████████] 42/42 (100%)
Reindex complete!
- Objects processed: 42
- Time taken: 15.3s
- Average: 2.7 objects/sec
Dry Run Output:
Dry run: Would reindex bucket "docs"
Objects to be reindexed (42 total):
- introduction.md (1.2 KB)
- api-reference.md (15.4 KB)
- getting-started.md (3.8 KB)
...
No changes made (dry run)
When to Reindex:
After bulk uploads
When search results seem incorrect
After changing bucket configuration
When recovering from errors
After restoring from backup
Use Cases
Document Search System
Build searchable documentation:
Terminal window
# Upload documentation
for
file
in
docs/*.md
;
do
raindrop
object
put
"
$(
basename
"
$file
"
)
"
"
$file
"
--bucket
docs
done
# Wait for automatic indexing
sleep
5
# Search documentation
raindrop
query
search
"
installation guide
"
--buckets
docs
raindrop
query
search
"
API authentication
"
--buckets
docs
Knowledge Base Q&A
Create AI-powered Q&A:
Terminal window
# Search knowledge base
raindrop
query
chunk-search
"
How do I configure database connections?
"
\
--buckets
knowledge-base
# Get detailed answer from specific doc
raindrop
query
document
"
What are the database connection parameters?
"
\
--bucket
knowledge-base
\
--object-id
database-guide.pdf
Content Analysis
Analyze uploaded content:
Terminal window
# Find all mentions of a topic
raindrop
query
search
"
security best practices
"
--buckets
docs
tutorials
# Summarize multiple documents
for
doc
in
report1.pdf
report2.pdf
report3.pdf
;
do
echo
"
===
$doc
===
"
raindrop
query
document
"
Provide a brief summary
"
\
--bucket
reports
\
--object-id
"
$doc
"
done
Index Management
Maintain search indexes:
Terminal window
# Check what would be reindexed
raindrop
query
reindex
--bucket
docs
--dry-run
# Reindex after bulk update
raindrop
query
reindex
--bucket
docs
--parallel
15
# Verify search works
raindrop
query
search
"
test query
"
--buckets
docs
Search Tips
Query Formulation:
Use natural language questions
Be specific about what you’re looking for
Include key terms and concepts
Try different phrasings if results aren’t good
Bucket Selection:
Search specific buckets for better relevance
Search multiple related buckets together
Use versioned buckets for time-specific searches
Result Pagination:
Save
requestId
from first search
Use
--request-id
and
--page
for subsequent pages
Request IDs expire after 24 hours
RAG vs Document Search:
Use
chunk-search
for questions requiring synthesis
Use
search
for finding specific documents
Use
document
for deep dives into single files
Best Practices
Search Performance:
Index buckets after bulk uploads
Use specific queries over generic ones
Search fewer buckets when possible
Implement caching for common queries
Index Management:
Reindex after configuration changes
Use dry-run before production reindexes
Monitor reindex performance
Schedule reindexes during low-traffic periods
Query Optimization:
Start broad, then narrow down
Use pagination for large result sets
Cache request IDs for continued browsing
Implement result deduplication
Content Organization:
Organize buckets by topic or domain
Use consistent naming conventions
Structure documents for better chunking
Include metadata in filenames
Troubleshooting
No Search Results:
Terminal window
# Check bucket exists and has content
raindrop
object
list
--bucket
docs
# Verify indexing completed
# (wait a few seconds after upload)
# Try reindexing
raindrop
query
reindex
--bucket
docs
# Retry search
raindrop
query
search
"
your query
"
--buckets
docs
Poor Search Quality:
Terminal window
# Try more specific queries
raindrop
query
search
"
specific term
"
--buckets
docs
# Use RAG search instead
raindrop
query
chunk-search
"
your question
"
--buckets
docs
# Check if bucket needs reindexing
raindrop
query
reindex
--bucket
docs
--dry-run
Slow Reindexing:
Terminal window
# Increase parallelism
raindrop
query
reindex
--bucket
docs
--parallel
20
# Check bucket size
raindrop
object
list
--bucket
docs
|
wc
-l
# Consider reindexing during off-peak hours
Exit Codes
Code
Description
0
Command completed successfully
1
General error (bucket not found, object not found, query failed, etc.)
2
Invalid arguments
Previous
raindrop object
Next
Commands

Raindrop Code Commands
URL: https://docs.liquidmetal.ai/reference/raindrop-code/
Raindrop Code Commands
Raindrop Code provides an AI-powered development environment through slash commands. These commands guide you through creating, updating, and debugging complete LiquidMetal applications with databases, APIs, and deployment infrastructure.
Each command initiates a structured workflow that connects to the Raindrop MCP server. The workflow orchestrates AI-guided development sessions, managing state transitions and storing artifacts locally in
~/.raindrop/<session_id>/
.
Commands operate on development sessions that track your application’s state, timeline, and artifacts. You can create new applications, reattach to existing sessions, add features, or debug deployed applications.
Prerequisites
Raindrop Code installed
- See
Raindrop Code Quick Start
LiquidMetal API key
- Set as
LM_API_KEY
environment variable
Authentication
- Commands automatically run
raindrop auth login
when needed
Available Commands
Raindrop Code provides four primary slash commands for application development:
Command
Purpose
Arguments
Use When
/new-raindrop-app
Create new application
None
Starting a new project
/reattach-raindrop-session
Resume existing session
[session_id]
(optional)
Continuing previous work
/update-raindrop-app
Add features
[session_id]
(optional)
Enhancing deployed apps
/debug-raindrop-app
Debug application
[session_id]
(optional)
Fixing production issues
Core Concepts
Development Sessions
Each workflow creates a
development session
with a unique identifier. Sessions track:
Session ID
- Unique identifier (e.g.,
sess_abc123
)
Timeline ID
- Workflow progression tracker
Current State
- Position in development workflow
Application Name
- Associated application
Artifacts
- Generated manifests, code, and deployment info
Sessions are stored in
~/.raindrop/index.json
with this structure:
{
"applications"
: {
"my-app"
: {
"latest_session_id"
:
"
sess_abc123
"
,
"sessions"
: [
"
sess_abc123
"
,
"
sess_def456
"
]
}
},
"sessions"
: {
"sess_abc123"
: {
"session_id"
:
"
sess_abc123
"
,
"timeline_id"
:
"
timeline_456
"
,
"created_at"
:
"
2025-11-14T12:00:00Z
"
,
"current_state"
:
"
deployment_complete
"
,
"application_name"
:
"
my-app
"
}
}
}
Workflow Orchestration
Commands use the Raindrop MCP server tools:
get-prompt
- Retrieves current workflow instructions
update-state
- Reports task completion and advances workflow
jump-to-state
- Jumps to specific states for feature addition or debugging
The AI follows returned instructions, completing tasks and reporting progress to advance through the workflow.
Authentication Flow
All commands authenticate before starting:
Command runs
raindrop auth login
Opens browser for authentication
Returns when authentication completes
Proceeds with workflow
Note
If you see “Please check your raindrop-mcp server status”, verify your MCP server is running with the
/mcp
command.
Creating New Applications
/new-raindrop-app
Create a new Raindrop application from scratch through a guided workflow.
Syntax:
/new-raindrop-app
What it does:
Authenticates with LiquidMetal
Creates new development session
Gathers application requirements
Designs architecture
Generates
raindrop.manifest
configuration
Creates application code
Deploys to infrastructure
Provides endpoint URLs and documentation
Workflow states:
Requirement gathering
Architecture design
Manifest generation
Code generation
Deployment
Testing
Example usage:
Terminal window
# Start Raindrop Code
raindrop-code
# In Raindrop Code, create new app
>
/new-raindrop-app
# AI guides you through:
# 1. "What kind of application do you want to build?"
# 2. Requirements clarification
# 3. Architecture design approval
# 4. Manifest review
# 5. Deployment
Session storage:
Your session is stored at
~/.raindrop/<session_id>/
with:
raindrop.manifest
- Infrastructure configuration
src/
- Generated application code
artifacts.json
- Deployment info and URLs
session.json
- Workflow state
Reattaching to Sessions
/reattach-raindrop-session [session_id]
Resume an existing development session to continue work.
Syntax:
/reattach-raindrop-session [session_id]
Arguments:
session_id
(optional) - Specific session to resume. If omitted, displays interactive selection.
What it does:
Authenticates with LiquidMetal
If
session_id
provided, uses it directly
Otherwise, reads
~/.raindrop/index.json
to list applications
Shows application picker if multiple exist
Retrieves current workflow state
Continues from where you left off
Application selection behavior:
No applications exist
- Suggests using
/new-raindrop-app
One application exists
- Automatically selects latest session
Multiple applications exist
- Displays interactive picker with state and last updated time
Example with session ID:
Terminal window
# Reattach to specific session
>
/reattach-raindrop-session sess_abc123
Example with picker:
Terminal window
# Let AI show you available applications
>
/reattach-raindrop-session
# AI displays:
# Available applications:
# 1. my-todo-app (state: deployment_complete, last updated: 2 hours ago)
# 2. my-api (state: code_generation, last updated: 1 day ago)
# Which application would you like to reattach to?
Use cases:
Resume interrupted workflows
Continue development after closing terminal
Switch between multiple projects
Review deployed application details
Adding Features
/update-raindrop-app [session_id]
Add new features to an existing deployed Raindrop application.
Syntax:
/update-raindrop-app [session_id]
Arguments:
session_id
(optional) - Target application session. If omitted, displays application picker.
What it does:
Authenticates with LiquidMetal
Selects target application (via argument or picker)
Calls
jump-to-state
with
target_state: "merge_features"
and
mode: "feature_addition"
Gathers feature requirements
Updates manifest and code
Deploys updated version
Tests new functionality
Example with picker:
Terminal window
>
/update-raindrop-app
# AI asks: "Which application would you like to add features to?"
# You select: my-todo-app
# AI asks: "What features would you like to add?"
# You describe: "Add user authentication with email/password"
# AI proceeds to:
# 1. Update raindrop.manifest with auth service
# 2. Generate authentication code
# 3. Deploy updated version
# 4. Test authentication endpoints
Example with session ID:
Terminal window
>
/update-raindrop-app sess_abc123
# What features would you like to add?
Feature workflow:
Feature requirement gathering
Architecture review and updates
Manifest modification
Code generation for new features
Integration with existing code
Deployment
Feature testing
Debugging Applications
/debug-raindrop-app [session_id]
Debug an existing deployed Raindrop application by examining logs, testing endpoints, and identifying issues.
Syntax:
/debug-raindrop-app [session_id]
Arguments:
session_id
(optional) - Application to debug. If omitted, displays application picker.
What it does:
Authenticates with LiquidMetal
Selects target application (via argument or picker)
Calls
jump-to-state
with
target_state: "endpoint_test"
and
mode: "debug"
Retrieves deployment information
Tests application endpoints
Examines logs for errors
Identifies issues
Proposes fixes
Deploys corrected version
Example:
Terminal window
>
/debug-raindrop-app
# AI asks: "Which application would you like to debug?"
# You select: my-api
# AI proceeds to:
# 1. Fetch deployment URLs from session artifacts
# 2. Test each endpoint
# 3. Use WebFetch to check responses
# 4. Query logs with raindrop CLI
# 5. Identify error patterns
# 6. Propose fixes with code changes
Debugging capabilities:
Endpoint testing
- Validates all service endpoints respond correctly
Log analysis
- Examines recent logs for errors and warnings
Error tracing
- Identifies root causes from stack traces
Performance issues
- Detects slow queries or timeouts
Configuration problems
- Validates manifest and environment variables
Debug workflow:
Endpoint health checks
Log retrieval and analysis
Error identification
Root cause analysis
Fix proposal and code review
Fix implementation
Deployment
Verification testing
Session Management
Finding Your Sessions
Sessions are tracked in
~/.raindrop/index.json
. You can inspect this file to see all applications and sessions:
Terminal window
# View all sessions
cat
~/.raindrop/index.json
|
jq
.
# List application names
cat
~/.raindrop/index.json
|
jq
'
.applications | keys
'
# Get latest session for an app
cat
~/.raindrop/index.json
|
jq
'
.applications["my-app"].latest_session_id
'
Session Directories
Each session creates a directory at
~/.raindrop/<session_id>/
containing:
raindrop.manifest
- Infrastructure configuration (HCL format)
src/
- Generated application code
artifacts.json
- Deployment URLs, resource IDs, metadata
session.json
- Workflow state and timeline information
Example session directory:
Terminal window
~
/.raindrop/sess_abc123/
├──
raindrop.manifest
# Service definitions, resources
├──
artifacts.json
# URLs, deployment info
├──
session.json
# Workflow state
└──
src/
├──
index.ts
# Main application code
├──
routes/
# API route handlers
└──
package.json
# Dependencies
Switching Between Projects
Work on multiple applications by using session IDs:
Terminal window
# Work on todo app
>
/update-raindrop-app sess_todo_123
# Later, switch to API project
>
/update-raindrop-app sess_api_456
# Debug production app
>
/debug-raindrop-app sess_prod_789
Best Practices
Starting new projects:
Use
/new-raindrop-app
for greenfield projects
Provide clear requirements upfront
Review architecture before proceeding
Validate manifest configuration
Updating applications:
Use
/update-raindrop-app
for deployed apps
Describe features clearly and completely
Review code changes before deployment
Test new functionality after deployment
Debugging issues:
Use
/debug-raindrop-app
for production problems
Start by describing observed symptoms
Let AI test endpoints and examine logs
Verify fixes in production after deployment
Session management:
Use descriptive application names during creation
Keep
~/.raindrop/
directory for session history
Use
/reattach-raindrop-session
to resume work
Provide session IDs directly when known
MCP server issues:
If commands fail with MCP errors, check server status with
/mcp
Reauthenticate if prompted
Verify
LM_API_KEY
environment variable is set
Ensure raindrop CLI is authenticated with
raindrop auth login
Previous
raindrop query
Next
KV Cache

Key Value Cache (KV Cache)
URL: https://docs.liquidmetal.ai/reference/kv-cache/
Key Value Cache (KV Cache)
KV Cache provides distributed key-value storage for caching data across applications. The component supports multiple data types including strings, JSON objects, binary data, and streams.
KV Cache stores data with optional expiration times and custom metadata. You can retrieve values with their associated metadata and cache status information. The component handles automatic serialization and provides type-safe access to stored data.
Applications use KV Cache for session storage, configuration caching, and temporary data persistence. The distributed nature ensures consistent access across multiple application instances.
Creating
Configure KV Cache storage in your raindrop.manifest file:
application
"demo-app"
{
kv_cache
"demo-kv-cache"
{}
}
Accessing
Access your KV Cache instance through environment bindings in your application code:
export
default
{
async
fetch
(
request
:
Request
,
env
:
Env
)
{
// Access the KV Cache instance
const
value
= await
env
.
demoKvCache
.
get
(
'
user:123
'
);
return
new
Response
(value);
}
}
Core Concepts
Main interfaces:
KvCache
- Primary interface for storage operations
KvCacheListKey
- Represents a key with metadata and expiration
KvCacheListResult
- Result structure for list operations
KvCacheGetWithMetadataResult
- Value with metadata and cache status
KvCacheListKey
Represents a stored key with its metadata and expiration information:
// Key structure with optional metadata and expiration
interface
KvCacheListKey<
Metadata
,
Key
extends
string
=
string
> {
name
:
Key
;
// The key name
expiration
?:
number
;
// Unix timestamp for expiration
metadata
?:
Metadata
;
// Custom metadata object
}
KvCacheListResult
Contains the results of list operations with pagination support:
// Complete list result
type
KvCacheListResult<
Metadata
,
Key
extends
string
=
string
>
=
{
list_complete
:
true
;
keys
:
KvCacheListKey
<
Metadata
,
Key
>[];
cacheStatus
:
string
|
null
;
}
|
{
// Paginated result with cursor
list_complete
:
false
;
keys
:
KvCacheListKey
<
Metadata
,
Key
>[];
cursor
:
string
;
cacheStatus
:
string
|
null
;
}
KvCacheGetWithMetadataResult
Returns value along with metadata and cache status:
// Value with metadata and cache information
interface
KvCacheGetWithMetadataResult<
Value
,
Metadata
> {
value
:
Value
|
null
;
// The stored value
metadata
:
Metadata
|
null
;
// Associated metadata
cacheStatus
:
string
|
null
;
// Cache hit/miss status
}
System Limits
Maximum key size: 512 bytes
Maximum value size: 25 MiB
Maximum key metadata: 1024 bytes
Rate limits: 1 write per second per key, 1000 operations per Service invocation
Minimum cacheTTL: 60 seconds
Default list operation limit: 1000 items
get
Retrieves a value from storage by key with optional type conversion and caching.
Input
Output
// Basic text retrieval
get
(key: Key, options
?:
Partial
<
KvCacheGetOptions
<
undefined
>>
):
Promise
<
string
|
null
>
// Explicit type specification
get
(key: Key, type:
'
text
'
):
Promise
<
string
|
null
>
get<
ExpectedValue
=
unknown
>
(
key
:
Key
,
type
:
'
json
'
)
:
Promise
<
ExpectedValue
|
null
>
get
(
key
:
Key
,
type
:
'
arrayBuffer
'
)
:
Promise
<
ArrayBuffer
|
null
>
get
(
key
:
Key
,
type
:
'
stream
'
)
:
Promise
<
ReadableStream
|
null
>
// With options
get
(
key
:
Key
,
options
?:
KvCacheGetOptions
<
'
text
'
>
)
:
Promise
<
string
|
null
>
get
<
ExpectedValue
=
unknown
>
(
key
:
Key
,
options
?:
KvCacheGetOptions
<
'
json
'
>
)
:
Promise
<
ExpectedValue
|
null
>
get
(
key
:
Key
,
options
?:
KvCacheGetOptions
<
'
arrayBuffer
'
>
)
:
Promise
<
ArrayBuffer
|
null
>
get
(
key
:
Key
,
options
?:
KvCacheGetOptions
<
'
stream
'
>
)
:
Promise
<
ReadableStream
|
null
>
// Returns the value or null if not found
string
|
null
ExpectedValue
|
null
ArrayBuffer
|
null
ReadableStream
|
null
Example
Retrieve user data from storage with JSON parsing:
// Get user data as JSON object
const
userData
= await
env
.
demoKvCache
.
get
<{
name
:
string
,
email
:
string
}>
(
'
user:123
'
,
'
json
'
);
if
(userData) {
console
.
log
(
`
User:
${
userData
.
name
}
`
);
// Access parsed object properties
}
put
Stores a value in the cache with optional expiration and metadata.
Input
Output
put
(
key: Key,
value: string
|
ArrayBuffer
|
ArrayBufferView
|
ReadableStream,
options
?:
KvCachePutOptions
):
Promise
<
void
>
interface
KvCachePutOptions {
expiration
?:
number
;
// Unix timestamp for expiration
expirationTtl
?:
number
;
// TTL in seconds
metadata
?:
any
|
null
;
// Custom metadata object
}
Promise
<
void
>
// No return value
Example
Store user session data with expiration:
// Store session data with 1 hour expiration
const
sessionData
=
JSON
.
stringify
(
{userId:
123
, role:
'
admin
'
}
);
await
env
.
demoKvCache
.
put
(
'
session:abc123
'
, sessionData, {
expirationTtl:
3600
,
// 1 hour in seconds
metadata: {created: Date
.
now
()}
// Custom metadata
});
list
Returns a list of keys matching optional prefix and pagination criteria.
Input
Output
list
<
Metadata
=
unknown
>
(options
?:
KvCacheListOptions):
Promise
<
KvCacheListResult
<
Metadata, Key
>>
interface
KvCacheListOptions {
limit
?:
number
;
// Maximum keys to return (default: 1000)
prefix
?:
string
|
null
;
// Key prefix filter
cursor
?:
string
|
null
;
// Pagination cursor
}
KvCacheListResult
<
Metadata, Key
>
// List result with pagination info
Example
List all user keys with pagination:
// Get first 10 user keys
const
result
= await
env
.
demoKvCache
.
list
(
{
prefix:
'
user:
'
,
// Only keys starting with 'user:'
limit:
10
// Limit to 10 results
}
);
for
(
const
key
of
result
.
keys
) {
console
.
log
(
`
Key:
${
key
.
name
}
, Expires:
${
key
.
expiration
}
`
);
// Process each key
}
getWithMetadata
Retrieves a value along with its metadata and cache status information.
Input
Output
// Basic retrieval with metadata
getWithMetadata
<
Metadata
=
unknown
>
(
key: Key,
options
?:
Partial
<
KvCacheGetOptions
<
undefined
>>
):
Promise
<
KvCacheGetWithMetadataResult
<
string, Metadata
>>
// Type-specific retrieval
getWithMetadata<
Metadata
=
unknown
>
(
key
:
Key
,
type
:
'
text
'
)
:
Promise
<
KvCacheGetWithMetadataResult
<
string
,
Metadata
>>
getWithMetadata
<
ExpectedValue
=
unknown
,
Metadata
=
unknown
>
(
key
:
Key
,
type
:
'
json
'
)
:
Promise
<
KvCacheGetWithMetadataResult
<
ExpectedValue
,
Metadata
>>
getWithMetadata
<
Metadata
=
unknown
>
(
key
:
Key
,
type
:
'
arrayBuffer
'
)
:
Promise
<
KvCacheGetWithMetadataResult
<
ArrayBuffer
,
Metadata
>>
getWithMetadata
<
Metadata
=
unknown
>
(
key
:
Key
,
type
:
'
stream
'
)
:
Promise
<
KvCacheGetWithMetadataResult
<
ReadableStream
,
Metadata
>>
KvCacheGetWithMetadataResult
<
Value, Metadata
>
// Value with metadata and cache status
Example
Retrieve configuration with creation metadata:
// Get config with metadata information
const
result
= await
env
.
demoKvCache
.
getWithMetadata
<{
version
:
string
}>
(
'
app:config
'
,
'
json
'
);
if
(result
.
value
) {
console
.
log
(
`
Config version:
${
result
.
value
.
version
}
`
);
// Access parsed value
console
.
log
(
`
Created:
${
result
.
metadata
?.
created
}
`
);
// Access metadata
console
.
log
(
`
Cache status:
${
result
.
cacheStatus
}
`
);
// Check cache hit/miss
}
delete
Removes a key and its associated value from storage.
Input
Output
delete
(
key
:
Key
)
:
Promise
<
void
>
Promise
<
void
>
// No return value
Example
Remove expired session data:
// Delete user session
await
env
.
demoKvCache
.
delete
(
'
session:abc123
'
);
console
.
log
(
'
Session removed
'
);
// Confirm deletion
Previous
Commands
Next
Logging

Logging
URL: https://docs.liquidmetal.ai/reference/logging/
Logging
Raindrop provides a structured logging system that automatically captures application behavior and enables custom event tracking. Every component (services, actors, observers, tasks) receives a logger instance through
this.env.logger
that records events with timestamps, trace correlation, and structured field data.
The system combines automatic resource interaction logging with manual application logging. Automatic logging captures all database queries, HTTP requests, AI model calls, and storage operations without requiring instrumentation. Manual logging allows you to add business events, debugging information, and custom metrics.
Key benefits include zero-configuration setup, automatic resource interaction capture, hierarchical contextual logging with shared fields, real-time log streaming via CLI, and historical query capabilities with time-based filtering.
Prerequisites
Active Raindrop application with services, actors, or other components
Basic understanding of application debugging and monitoring concepts
Familiarity with TypeScript async patterns and error handling
Knowledge of log levels and when to use different severity levels
Creating/Getting Started
Logging requires no configuration - every Raindrop component automatically receives a logger instance. Access the logger through
this.env.logger
in services, actors, observers, and tasks:
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
// Logger is automatically available through this.env.logger
this
.
env
.
logger
.
info
(
"
Request received
"
, {
method: request
.
method
,
url: request
.
url
,
userAgent: request
.
headers
.
get
(
'
User-Agent
'
)
});
return
new
Response
(
"
Hello World
"
);
}
}
Log Levels Available:
// Debug - detailed information for development
this
.
env
.
logger
.
debug
(
"
Processing user input
"
, { inputKeys: Object
.
keys
(data) });
// Info - normal application events
this
.
env
.
logger
.
info
(
"
User session started
"
, { userId: user
.
id
});
// Warn - unusual conditions that don't break functionality
this
.
env
.
logger
.
warn
(
"
API response slow
"
, { responseTime:
3000
});
// Error - failures requiring attention
this
.
env
.
logger
.
error
(
"
Database connection failed
"
, { attempt: retryCount });
Accessing/Basic Usage
Use the logger throughout your application components to track events and debug issues:
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
const
url
=
new
URL
(request
.
url
);
// Log request start
this
.
env
.
logger
.
info
(
"
Processing request
"
, {
path: url
.
pathname
,
method: request
.
method
});
try
{
if
(url
.
pathname
===
'
/users
'
) {
const
users
= await
this
.
getUserList
();
// Log successful operation
this
.
env
.
logger
.
info
(
"
Retrieved user list
"
, {
count: users
.
length
,
duration: Date
.
now
()
});
return
Response
.
json
(users);
}
return
new
Response
(
"
Not found
"
, { status:
404
});
}
catch
(error) {
// Log errors with context
this
.
env
.
logger
.
error
(error, {
operation:
"
get_users
"
,
path: url
.
pathname
});
return
new
Response
(
"
Internal error
"
, { status:
500
});
}
}
private
async
getUserList
()
:
Promise
<
any
[]> {
this
.
env
.
logger
.
debug
(
"
Querying database for users
"
);
// Database query logic here
return
[];
}
}
Core Concepts
The Raindrop logging system provides structured logging with automatic context capture and multiple severity levels for different types of events.
Structured Logging
: All log entries accept a
LogFields
object containing key-value data alongside the text message. This structured approach enables powerful filtering, searching, and analysis compared to plain text logging.
Contextual Hierarchy
: Create child logger instances using
with()
that automatically include common fields in all subsequent log entries. This creates a hierarchy where parent context flows down to child loggers.
Automatic Correlation
: Every log entry receives automatic timestamps and trace correlation IDs that group related operations together. This enables you to follow request flows across distributed components.
Zero-Configuration Resource Logging
: Raindrop automatically captures and logs all resource interactions (SQL queries, object storage, AI models, queues) without requiring manual instrumentation or configuration.
Logger Interface
The
Logger
interface provides structured logging capabilities with contextual hierarchy support:
interface
Logger {
// Context creation methods
with
(
fields
?:
LogFields
)
:
Logger
;
withError
(
error
:
unknown
,
field
?:
LogFields
)
:
Logger
;
// Standard logging methods
debug
(
message
:
string
,
fields
?:
LogFields
)
:
void
;
info
(
message
:
string
,
fields
?:
LogFields
)
:
void
;
warn
(
message
:
string
,
fields
?:
LogFields
)
:
void
;
error
(
message
:
string
,
fields
?:
LogFields
)
:
void
;
log
(
message
:
string
,
fields
?:
LogFields
)
:
void
;
// defaults to INFO level
// Advanced logging methods
logAtLevel
(
level
:
LogLevel
,
message
:
string
,
fields
?:
LogFields
)
:
void
;
message
(
message
:
string
,
fields
?:
LogFields
)
:
LogMessage
;
messageAtLevel
(
level
:
LogLevel
,
message
:
string
,
fields
?:
LogFields
)
:
LogMessage
;
}
// Log severity levels
enum
LogLevel {
DEBUG
=
'
DEBUG
'
,
// Detailed debugging information
INFO
=
'
INFO
'
,
// Normal application events
WARN
=
'
WARN
'
,
// Warning conditions
ERROR
=
'
ERROR
'
// Error conditions
}
// Structured data type for log fields
type
LogFields
=
Record
<
string
,
number
|
string
|
boolean
|
object
|
undefined
|
null
|
Error
|
LogFields
>;
// Log message structure
interface
LogMessage {
level
:
LogLevel
;
message
:
string
;
fields
:
LogFields
;
}
Log Levels and Usage
Different log levels serve different purposes in application monitoring and debugging.
debug()
Use for detailed information during development. These logs are typically disabled in production:
this
.
env
.
logger
.
debug
(
"
Validating user input
"
, {
inputKeys: Object
.
keys
(formData),
validationRules: activeRules
});
this
.
env
.
logger
.
debug
(
"
Cache hit for key
"
, {
key: cacheKey,
ttl: remainingTTL
});
Parameters:
message
:
string
- Descriptive message for the debug event
fields
:
LogFields
- Optional structured data for context
info()
Use for normal application events that should be recorded:
this
.
env
.
logger
.
info
(
"
User session started
"
, {
userId: user
.
id
,
loginMethod:
"
oauth
"
,
ipAddress: request
.
headers
.
get
(
'
cf-connecting-ip
'
)
});
this
.
env
.
logger
.
info
(
"
Order completed
"
, {
orderId: order
.
id
,
totalAmount: order
.
total
,
processingTime: Date
.
now
()
-
startTime
});
Parameters:
message
:
string
- Clear description of the normal event
fields
:
LogFields
- Optional context data
warn()
Use for unusual conditions that don’t break functionality:
this
.
env
.
logger
.
warn
(
"
API response slow
"
, {
endpoint:
"
/api/users
"
,
responseTime:
5000
,
threshold:
2000
});
this
.
env
.
logger
.
warn
(
"
Approaching rate limit
"
, {
currentRequests:
95
,
limit:
100
,
window:
"
1 minute
"
});
Parameters:
message
:
string
- Description of the unusual condition
fields
:
LogFields
- Optional context about the condition
error()
Use for failures that need immediate attention:
// Log error messages
this
.
env
.
logger
.
error
(
"
Database connection failed
"
, {
database:
"
users
"
,
attempt: retryCount,
lastError: connectionError
.
message
});
// Log Error objects (captures stack traces)
try
{
await
processPayment
(order);
}
catch
(error) {
this
.
env
.
logger
.
error
(error, {
orderId: order
.
id
,
paymentMethod: order
.
paymentMethod
,
stage:
"
charge_processing
"
});
throw
error;
}
Parameters:
message
:
string
- Error description
fields
:
LogFields
- Optional context about the failure
withError()
Create a logger with error context attached:
withError
(error: unknown, field
?:
LogFields): Logger
Parameters:
error
:
unknown
- Error object to attach to logger context
field
:
LogFields
- Optional additional fields
try
{
await
processPayment
(order);
}
catch
(error) {
const
errorLogger
=
this
.
env
.
logger
.
withError
(error
, {
orderId:
order
.
id
,
paymentMethod:
order
.
paymentMethod
}
);
errorLogger
.
error
(
"
Payment processing failed
"
);
errorLogger
.
warn
(
"
Attempting retry with backup gateway
"
);
}
logAtLevel()
Log a message at a specific log level programmatically:
logAtLevel
(level: LogLevel, message: string, fields
?:
LogFields):
void
Parameters:
level
:
LogLevel
- The log level (DEBUG, INFO, WARN, ERROR)
message
:
string
- The message to log
fields
:
LogFields
- Optional structured data
const
currentLevel
=
determineLogLevel
();
this
.
env
.
logger
.
logAtLevel
(currentLevel,
"
Dynamic log message
"
, {
calculatedLevel: currentLevel,
systemHealth:
"
degraded
"
});
message() and messageAtLevel()
Create log messages without immediately sending them:
message
(message: string, fields
?:
LogFields): LogMessage
messageAtLevel
(level: LogLevel, message: string, fields
?:
LogFields): LogMessage
Parameters:
level
:
LogLevel
- The log level (for messageAtLevel)
message
:
string
- The message text
fields
:
LogFields
- Optional structured data
// Create message objects for batching or conditional logging
const
userAction
=
this
.
env
.
logger
.
message
(
"
User action completed
"
, {
action:
"
purchase
"
,
userId:
user
.
id
}
);
const
systemEvent
=
this
.
env
.
logger
.
messageAtLevel
(LogLevel
.
WARN
,
"
System maintenance
"
, {
maintenanceWindow:
"
2024-01-15T02:00:00Z
"
}
);
// Messages can be processed or sent later based on conditions
if
(shouldLogUserActions) {
// Send the message to configured log sink
}
Contextual Logging
Create child loggers that automatically include common fields in all log entries.
with()
Create a new logger instance that includes specified fields in all subsequent log entries:
with
(fields
?:
LogFields): Logger
Parameters:
fields
:
LogFields
- Optional key-value pairs to include in all log entries
// Create logger with request context
const
requestLogger
=
this
.
env
.
logger
.
with
(
{
requestId:
crypto
.
randomUUID
()
,
userId:
session
.
userId
,
endpoint:
request
.
url
}
);
// All logs include request context automatically
requestLogger
.
info
(
"
Processing payment
"
);
// Includes requestId, userId, endpoint
requestLogger
.
warn
(
"
Invalid card number
"
);
// Includes requestId, userId, endpoint
requestLogger
.
error
(
"
Payment gateway timeout
"
);
// Includes requestId, userId, endpoint
// Nest loggers for additional context
const
paymentLogger
=
requestLogger
.
with
(
{
orderId:
order
.
id
,
amount:
order
.
total
}
);
paymentLogger
.
info
(
"
Starting payment flow
"
);
// Includes all parent fields + orderId, amount
paymentLogger
.
error
(
"
Card declined
"
);
// Includes all parent fields + orderId, amount
CLI Log Access
Access logs from deployed applications using the Raindrop CLI with real-time streaming and historical querying capabilities.
Real-Time Log Streaming
Stream live logs as they occur:
Terminal window
raindrop
logs
tail
raindrop
logs
tail
--application
my-app
--version
v1.2.3
Stream Features:
Groups related events by trace ID
Shows execution duration for each operation
Displays structured field data with formatting
Includes automatic resource interaction logs
Historical Log Querying
Query logs with time-based filtering and search criteria:
Terminal window
# Query last hour (default)
raindrop
logs
query
# Query specific time ranges
raindrop
logs
query
--last
1h
raindrop
logs
query
--last
30m
raindrop
logs
query
--last
2d
# Query explicit time range
raindrop
logs
query
--start-time
1638360000000
--end-time
1638363600000
raindrop
logs
query
--start-time
"
2024-01-15T10:00:00Z
"
--end-time
"
2024-01-15T11:00:00Z
"
# Filter by application and version
raindrop
logs
query
--application
my-app
--version
v1.2.3
# Filter by trace ID or status
raindrop
logs
query
--trace-id
abc123def
raindrop
logs
query
--status
error
# Limit results and format output
raindrop
logs
query
--limit
50
--output
json
Query Parameters:
--last
: Duration from now (“1h”, “30m”, “2d”, “1w”)
--start-time
: Start time (Unix timestamp ms or ISO string)
--end-time
: End time (Unix timestamp ms or ISO string)
--application
: Filter by application name
--version
: Filter by application version
--trace-id
: Filter by specific trace ID
--status
: Filter by status (
ok
,
error
)
--limit
: Max events to return (default: 100)
--output
: Format (
text
,
json
)
Log Output Format
Logs display with trace grouping and structured formatting:
[1/15/2024, 2:30:25 PM] 🔗 Trace: abc123def (250ms total)
Org: my-org, App: my-app, v1.2.3, Script: api-service
1. ✅ HTTP Request (45ms)
http.method: POST
http.url: /api/users
✅ http.status: 200
2. ✅ Database Query (180ms)
🗄️ SQL Query: SELECT * FROM users WHERE active = true
📊 Rows Read: 150
🏦 Database: primary
📊 meta: 180ms, 150 rows read, us-east-1, DB: 2.3KB
3. ✅ Custom Log Event (5ms)
userId: "12345"
action: "user_lookup"
result: "success"
Automatic Resource Logging
Raindrop automatically logs all resource interactions without requiring manual instrumentation. This provides complete visibility into your application’s behavior.
Automatically Logged Resources:
HTTP Services
: Request method, URL, status code, response time, user agent
SQL Databases
: Query text, execution time, rows read/written, database name, region
Vector Indexes
: Query vectors, similarity scores, metadata filters, result counts
Object Storage
: Object keys, metadata, content types, upload/download operations
Key-Value Cache
: Keys, operation types (get/put/delete), hit/miss status
Message Queues
: Message content, send/receive timestamps, retry attempts
SmartBuckets
: Search queries, document processing, result relevance scores
SmartMemory
: Memory operations, retrieval queries, storage updates
AI Models
: Model names, prompts, responses, token usage, processing time, costs
Actors
: Lifecycle events, state changes, message passing, persistence operations
Code Examples
Complete logging implementations demonstrating best practices and common patterns.
Service with Structured Logging
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
const
startTime
=
Date
.
now
();
const
requestId
=
crypto
.
randomUUID
();
// Create request logger with context
const
requestLogger
=
this
.
env
.
logger
.
with
(
{
requestId
,
method:
request
.
method
,
url:
request
.
url
,
userAgent:
request
.
headers
.
get
(
'
User-Agent
'
)
}
);
requestLogger
.
info
(
"
Request started
"
);
try
{
const
result
= await
this
.
handleRequest
(request
,
requestLogger);
requestLogger
.
info
(
"
Request completed
"
, {
status: result
.
status
,
duration: Date
.
now
()
-
startTime
});
return
result;
}
catch
(error) {
requestLogger
.
error
(error, {
duration: Date
.
now
()
-
startTime,
stage:
"
request_processing
"
});
return
new
Response
(
"
Internal Server Error
"
, { status:
500
});
}
}
private
async
handleRequest
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
Response
> {
const
url
=
new
URL
(request
.
url
);
// Route to specific handlers
if
(url
.
pathname
===
'
/api/users
'
) {
return
this
.
handleUsers
(request, logger);
}
if
(url
.
pathname
===
'
/api/orders
'
) {
return
this
.
handleOrders
(request, logger);
}
// Log unknown endpoints for monitoring
logger
.
warn
(
"
Unknown endpoint requested
"
, {
path: url
.
pathname
,
query: url
.
search
,
method: request
.
method
,
userAgent: request
.
headers
.
get
(
'
User-Agent
'
)
});
return
new
Response
(
"
Not Found
"
, { status:
404
});
}
private
async
handleUsers
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
Response
> {
const
userLogger
=
logger
.
with
(
{ operation:
"
list_users
"
}
);
userLogger
.
debug
(
"
Querying database for users
"
);
try
{
// Simulate database query
const
users
= await
this
.
queryUsers
();
userLogger
.
info
(
"
Users retrieved successfully
"
, {
count: users
.
length
,
hasNext: users
.
length
===
100
});
return
Response
.
json
({
users,
total: users
.
length
});
}
catch
(error) {
userLogger
.
error
(error, {
errorType:
"
database_error
"
,
table:
"
users
"
});
throw
error;
}
}
private
async
handleOrders
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
Response
> {
const
orderLogger
=
logger
.
with
(
{ operation:
"
list_orders
"
}
);
if
(request
.
method
===
'
GET
'
) {
return
this
.
getOrders
(orderLogger);
}
if
(request
.
method
===
'
POST
'
) {
return
this
.
createOrder
(request, orderLogger);
}
orderLogger
.
warn
(
"
Unsupported method for orders endpoint
"
, {
method: request
.
method
,
allowedMethods: [
"
GET
"
,
"
POST
"
]
});
return
new
Response
(
"
Method Not Allowed
"
, { status:
405
});
}
private
async
getOrders
(
logger
:
Logger
)
:
Promise
<
Response
> {
logger
.
debug
(
"
Retrieving order list
"
);
const
orders
= await
this
.
queryOrders
();
logger
.
info
(
"
Orders retrieved
"
, {
count: orders
.
length
,
totalValue: orders
.
reduce
(
(
sum
,
order
)
=>
sum
+
order
.
total
,
0
)
});
return
Response
.
json
({ orders });
}
private
async
createOrder
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
Response
> {
const
orderData
= await
request
.
json
();
const
orderLogger
=
logger
.
with
(
{
customerId:
orderData
.
customerId
,
itemCount:
orderData
.
items
?.
length
||
0
,
total:
orderData
.
total
}
);
orderLogger
.
info
(
"
Creating new order
"
);
try
{
// Validate order data
this
.
validateOrder
(orderData, orderLogger);
// Process payment
const
paymentResult
= await
this
.
processPayment
(orderData
,
orderLogger);
// Create order record
const
order
= await
this
.
createOrderRecord
(orderData
,
orderLogger);
orderLogger
.
info
(
"
Order created successfully
"
, {
orderId: order
.
id
,
paymentId: paymentResult
.
id
});
return
Response
.
json
({
success:
true
,
orderId: order
.
id
});
}
catch
(error) {
orderLogger
.
error
(error, {
stage:
"
order_creation
"
,
orderData:
JSON
.
stringify
(orderData)
});
return
Response
.
json
({
success:
false
,
error:
"
Failed to create order
"
}, { status:
400
});
}
}
private
validateOrder
(
orderData
:
any
,
logger
:
Logger
)
:
void
{
logger
.
debug
(
"
Validating order data
"
, {
requiredFields: [
"
customerId
"
,
"
items
"
,
"
total
"
],
providedFields: Object
.
keys
(orderData)
});
if
(
!
orderData
.
customerId
) {
logger
.
error
(
"
Order validation failed
"
, {
error:
"
missing_customer_id
"
});
throw
new
Error
(
"
Customer ID is required
"
);
}
if
(
!
orderData
.
items
||
orderData
.
items
.
length
===
0
) {
logger
.
error
(
"
Order validation failed
"
, {
error:
"
no_items
"
});
throw
new
Error
(
"
Order must contain at least one item
"
);
}
logger
.
info
(
"
Order validation passed
"
);
}
private
async
processPayment
(
orderData
:
any
,
logger
:
Logger
)
:
Promise
<
any
> {
const
paymentLogger
=
logger
.
with
(
{
paymentMethod:
orderData
.
paymentMethod
,
amount:
orderData
.
total
}
);
paymentLogger
.
info
(
"
Processing payment
"
);
try
{
// Simulate payment processing
const
result
= await
this
.
chargePayment
(orderData);
paymentLogger
.
info
(
"
Payment processed successfully
"
, {
transactionId: result
.
transactionId
,
processingTime: result
.
processingTime
});
return
result;
}
catch
(error) {
paymentLogger
.
error
(error, {
stage:
"
payment_charge
"
,
gateway:
"
stripe
"
});
throw
new
Error
(
"
Payment processing failed
"
);
}
}
private
async
createOrderRecord
(
orderData
:
any
,
logger
:
Logger
)
:
Promise
<
any
> {
logger
.
debug
(
"
Creating order record in database
"
);
const
order
= {
id:
`
ORDER-
${
Date
.
now
()
}
`
,
customerId:
orderData
.
customerId
,
items:
orderData
.
items
,
total:
orderData
.
total
,
createdAt:
new
Date
()
.
toISOString
()
}
;
// Simulate database save
await
this
.
saveOrder
(order);
logger
.
info
(
"
Order record created
"
, {
orderId: order
.
id
,
recordSize:
JSON
.
stringify
(order)
.
length
});
return
order;
}
// Mock methods for example
private
async
queryUsers
()
:
Promise
<
any
[]> {
return
[]; }
private
async
queryOrders
()
:
Promise
<
any
[]> {
return
[]; }
private
async
chargePayment
(
orderData
:
any
)
:
Promise
<
any
> {
return
{ transactionId:
"
txn_123
"
, processingTime:
150
};
}
private
async
saveOrder
(
order
:
any
)
:
Promise
<
void
> {}
}
Error Handling with Context
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
try
{
return
await
this
.
processRequest
(request);
}
catch
(error) {
return
this
.
handleError
(error, request);
}
}
private
async
processRequest
(
request
:
Request
)
:
Promise
<
Response
> {
const
url
=
new
URL
(request
.
url
);
const
operation
=
this
.
getOperation
(url
.
pathname
);
const
logger
=
this
.
env
.
logger
.
with
(
{
operation
,
path:
url
.
pathname
,
method:
request
.
method
}
);
try
{
logger
.
info
(
"
Operation started
"
);
const
result
= await
this
.
executeOperation
(operation
,
request
,
logger);
logger
.
info
(
"
Operation completed successfully
"
, {
resultType:
typeof
result,
resultSize: result
?
JSON
.
stringify
(result)
.
length
:
0
});
return
Response
.
json
(result);
}
catch
(error) {
logger
.
error
(error, {
operation,
stage:
"
execution
"
,
inputSize: request
.
headers
.
get
(
'
content-length
'
)
||
0
});
// Re-throw to be handled by main error handler
throw
error;
}
}
private
handleError
(
error
:
unknown
,
request
:
Request
)
:
Response
{
const
errorLogger
=
this
.
env
.
logger
.
with
(
{
url:
request
.
url
,
method:
request
.
method
,
userAgent:
request
.
headers
.
get
(
'
User-Agent
'
)
}
);
if
(error
instanceof
ValidationError
) {
errorLogger
.
warn
(
"
Validation error occurred
"
, {
errorType:
"
validation
"
,
validationErrors: error
.
errors
});
return
Response
.
json
({
error:
"
Validation failed
"
,
details: error
.
errors
}, { status:
400
});
}
if
(error
instanceof
AuthenticationError
) {
errorLogger
.
warn
(
"
Authentication failed
"
, {
errorType:
"
authentication
"
,
reason: error
.
reason
});
return
Response
.
json
({
error:
"
Authentication required
"
}, { status:
401
});
}
if
(error
instanceof
NotFoundError
) {
errorLogger
.
info
(
"
Resource not found
"
, {
errorType:
"
not_found
"
,
resource: error
.
resource
});
return
Response
.
json
({
error:
"
Resource not found
"
}, { status:
404
});
}
// Unknown error - log with full details
errorLogger
.
error
(error
as
Error
, {
errorType:
"
unknown
"
,
stack: (error
as
Error
)
.
stack
});
return
Response
.
json
({
error:
"
Internal server error
"
}, { status:
500
});
}
private
getOperation
(
pathname
:
string
)
:
string
{
if
(pathname
.
startsWith
(
'
/api/users
'
))
return
'
user_management
'
;
if
(pathname
.
startsWith
(
'
/api/orders
'
))
return
'
order_processing
'
;
if
(pathname
.
startsWith
(
'
/api/products
'
))
return
'
product_catalog
'
;
return
'
unknown
'
;
}
private
async
executeOperation
(
operation
:
string
,
request
:
Request
,
logger
:
Logger
)
:
Promise
<
any
> {
switch
(operation) {
case
'
user_management
'
:
return
this
.
handleUserOperation
(request, logger);
case
'
order_processing
'
:
return
this
.
handleOrderOperation
(request, logger);
case
'
product_catalog
'
:
return
this
.
handleProductOperation
(request, logger);
default
:
throw
new
NotFoundError
(
`
Unknown operation:
${
operation
}
`
);
}
}
private
async
handleUserOperation
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
any
> {
logger
.
debug
(
"
Processing user operation
"
);
// Implementation here
return
{ users: [] };
}
private
async
handleOrderOperation
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
any
> {
logger
.
debug
(
"
Processing order operation
"
);
// Implementation here
return
{ orders: [] };
}
private
async
handleProductOperation
(
request
:
Request
,
logger
:
Logger
)
:
Promise
<
any
> {
logger
.
debug
(
"
Processing product operation
"
);
// Implementation here
return
{ products: [] };
}
}
// Custom error classes for demonstration
class
ValidationError
extends
Error
{
constructor
(
public
errors
:
string
[]
)
{
super
(
'
Validation failed
'
);
}
}
class
AuthenticationError
extends
Error
{
constructor
(
public
reason
:
string
)
{
super
(
'
Authentication failed
'
);
}
}
class
NotFoundError
extends
Error
{
constructor
(
public
resource
:
string
)
{
super
(
'
Resource not found
'
);
}
}
Previous
KV Cache
Next
Manifest

Manifest File
URL: https://docs.liquidmetal.ai/reference/manifest/
Manifest File
The manifest file serves as the blueprint for your Raindrop application, allowing you to declaratively define your application’s architecture, components, and their relationships. This guide will walk you through creating a manifest file using a practical example.
Core Concepts
A Raindrop manifest file:
Defines all application components and their relationships
Uses HCL (HashiCorp Configuration Language) syntax
Lives in a
raindrop.manifest
file at your project root
Generates TypeScript code and infrastructure when processed
Example: Building a File Processing Pipeline
Let’s explore how to build a data processing pipeline that:
Accepts file uploads into a storage bucket
Processes those files using a bucket observer
Sends results to a message queue
Processes queue messages and stores data in SQL
Here’s the data flow visualization:
flowchart LR
input_file(Input File)
bucket(Bucket)
observer1(Bucket Observer)
queue(Queue)
observer2(Queue Observer)
input_file --> bucket
bucket --> observer1
observer1 --> queue
queue --> observer2
Below is the manifest that implements this pipeline:
application
"demo"
{
// define the bucket
bucket
"ingest-bucket"
{
}
// define the observer that will process the objects in the ingest bucket
observer
"process-object"
{
// set the bucket as the source for the observer
source {
bucket
=
"
ingest-bucket
"
}
}
// define the queue that will receive the processed objects
queue
"processed-queue"
{
}
// define sql database to store the processed objects
sql_database
"db"
{}
// define the observer that will process the objects in the processed queue
observer
"process-queue"
{
source {
queue
=
"
processed-queue
"
}
}
}
The manifest above demonstrates how to combine resources (bucket, queue, SQL database) and services (observers) to build a complete application. For more details on the individual components:
See the
Resources
documentation to learn more about configuring buckets, queues, databases and other resources
See the
Services
documentation to learn more about HTTP services and observers
Previous
Logging
Next
MCP Service

MCP
URL: https://docs.liquidmetal.ai/reference/mcp/
MCP
Overview
MCP services expose Model Context Protocol servers that AI agents can connect to and use. These services provide tools, prompts, and resources that AI models can access through standardized interfaces.
Models deployed on Raindrop that support native tool calling can directly use these MCP servers. External AI agents and services can also connect to your MCP servers using the standard protocol. You can create both public MCP services for open access and protected MCP services that require OAuth authentication. The framework handles connection management, type safety through Zod schemas, and automatic registration of tools, prompts, and resources.
Creating
Define MCP services in your raindrop.manifest using either public or protected visibility:
Public MCP
Protected MCP
application
"demo-app"
{
mcp_service
"demo-mcp"
{
visibility
=
"
public
"
}
}
application
"demo-app"
{
mcp_service
"demo-mcp"
{
visibility
=
"
protected
"
authorization_server
=
"
https://authkit.liquidmetal.run
"
}
}
Implementing
Build your MCP service by registering tools, prompts, and resources:
export
default
{
async
fetch
(
request
:
Request
,
env
:
Env
)
:
Promise
<
Response
> {
// Get the MCP server instance from environment
const
mcpServer
=
env
.
DEMO_MCP
;
// Register a simple tool with description and schema
mcpServer
.
registerTool
(
"
greet
"
, {
description:
"
Greet a user by name
"
,
inputSchema: {
name: z
.
string
()
}
},
async
(
args
,
extra
)
=>
{
return
{ text:
`
Hello,
${
args
.
name
}
!
`
};
});
return
new
Response
(
"
MCP service configured
"
);
}
};
Core Concepts
MCP services expose three types of capabilities that AI agents can interact with:
Tools
: Functions that AI agents can call with typed parameters
Prompts
: Reusable prompt templates with variable substitution
Resources
: Data sources that agents can read from
Tools
Tools are functions that AI agents can execute. Each tool has a name, description, and optional schema for parameters:
// Register a tool without parameters
mcpServer
.
registerTool
(
"
get_time
"
, {
description:
"
Get the current time
"
},
async
(
args
,
extra
)
=>
{
return
{ time:
new
Date
()
.
toISOString
() };
});
// Register a tool with parameters
mcpServer
.
registerTool
(
"
calculate
"
, {
description:
"
Perform calculation
"
,
inputSchema: {
operation: z
.
enum
([
"
add
"
,
"
multiply
"
]),
numbers: z
.
array
(z
.
number
())
}
},
async
(
args
,
extra
)
=>
{
const
result
=
args
.
operation
===
"
add
"
?
args
.
numbers
.
reduce
(
(
a
,
b
)
=>
a
+
b,
0
)
:
args
.
numbers
.
reduce
(
(
a
,
b
)
=>
a
*
b,
1
);
return
{ result };
});
Prompts
Prompts provide reusable templates that AI agents can use with dynamic content:
// Register a prompt template
mcpServer
.
registerPrompt
(
"
code_review
"
, {
description:
"
Generate code review
"
,
argsSchema: {
language: z
.
string
(),
code: z
.
string
()
}
},
async
(
args
,
extra
)
=>
{
return
{
messages: [{
role:
"
user
"
,
content:
`
Review this
${
args
.
language
}
code:
\n
${
args
.
code
}
`
}]
};
});
Resources
Resources expose data that AI agents can read:
// Register a static resource
mcpServer
.
registerResource
(
"
config
"
,
"
file://config.json
"
, {
description:
"
Application configuration
"
,
mimeType:
"
application/json
"
},
async
(
uri
,
extra
)
=>
{
const
config
= await
loadConfig
();
return
{
contents: [{
text:
JSON
.
stringify
(config,
null
,
2
),
mimeType:
"
application/json
"
}]
};
});
registerTool
Register a tool with a configuration object. Provides more control over tool metadata including title, schemas, and annotations.
Input
Output
registerTool
<
InputArgs extends ZodRawShape, OutputArgs extends ZodRawShape
>
(
name: string,
config: {
title?: string;
description
?:
string;
inputSchema
?:
InputArgs;
outputSchema
?:
OutputArgs;
annotations
?:
Record
<
string, unknown>;
},
cb: ToolCallback
<
InputArgs
>
): RegisteredTool;
RegisteredTool
Example
Register a weather tool with detailed configuration:
// Register a weather tool with full configuration
const
weatherTool
=
mcpServer
.
registerTool
(
"
get-weather
"
, {
title:
"
Get Weather Information
"
,
description:
"
Fetch current weather conditions and forecast
"
,
inputSchema: {
location:
z
.
string
()
.
describe
(
"
City name or coordinates
"
)
,
units:
z
.
enum
([
"
celsius
"
,
"
fahrenheit
"
])
.
optional
()
,
includeForecast:
z
.
boolean
()
.
optional
()
},
outputSchema: {
temperature:
z
.
number
()
,
conditions:
z
.
string
()
,
forecast:
z
.
array
(z
.
object
(
{
day:
z
.
string
()
,
high:
z
.
number
()
,
low:
z
.
number
()
}
))
.
optional
()
},
annotations: {
category:
"
weather
"
,
rateLimit:
"
100/hour
"
}
}, async
(
args
,
extra
)
=> {
const
weather
= await
fetchWeatherAPI
(args
.
location
,
args
.
units
)
;
return {
temperature:
weather
.
temp
,
conditions:
weather
.
description
,
forecast:
args
.
includeForecast
?
weather
.
forecast
:
undefined
};
}
);
registerPrompt
Register a prompt template with a configuration object. Provides structured control over prompt metadata.
Input
Output
registerPrompt
<
Args extends PromptArgsRawShape
>
(
name: string,
config: {
title?: string;
description
?:
string;
argsSchema
?:
Args;
},
cb: PromptCallback
<
Args
>
): RegisteredPrompt;
RegisteredPrompt
Example
Register a documentation prompt with configuration:
// Register a documentation prompt with configuration
const
docPrompt
=
mcpServer
.
registerPrompt
(
"
generate-docs
"
, {
title:
"
Documentation Generator
"
,
description:
"
Generate comprehensive documentation for code
"
,
argsSchema: {
codeType:
z
.
enum
([
"
function
"
,
"
class
"
,
"
module
"
])
,
language:
z
.
string
()
,
includeExamples:
z
.
boolean
()
.
default
(
true
)
,
style:
z
.
enum
([
"
brief
"
,
"
detailed
"
])
.
optional
()
}
}, async
(
args
,
extra
)
=> {
const
template
=
args
.
style
===
"
brief
"
?
"
Generate concise documentation
"
:
"
Generate detailed documentation with examples
"
;
return {
messages:
[{
role:
"
system
"
,
content:
`
You are a documentation expert for
${
args
.
language
}
code.
`
}, {
role:
"
user
"
,
content: {
type:
"
text
"
,
text:
`
${
template
}
for this
${
args
.
codeType
}
.
${
args
.
includeExamples
?
"
Include usage examples.
"
:
""
}
`
}
}]
};
}
);
registerResource
Register a resource with a configuration object. Provides structured control over resource metadata.
Input
Output
registerResource
(
name: string,
uriOrTemplate: string
|
ResourceTemplate,
config: ResourceMetadata,
readCallback: ReadResourceCallback
|
ReadResourceTemplateCallback
): RegisteredResource
|
RegisteredResourceTemplate;
RegisteredResource
|
RegisteredResourceTemplate
Example
Register a database resource with configuration:
// Register a database resource with configuration
const
dbResource
=
mcpServer
.
registerResource
(
"
database-stats
"
,
"
db://stats
"
,
{
description:
"
Database performance and usage statistics
"
,
mimeType:
"
application/json
"
,
metadata: {
refreshInterval:
30000
,
cacheable:
true
}
},
async
(
uri
,
extra
)
=> {
const
stats
= await
queryDatabaseStats
()
;
return {
contents:
[{
uri: uri
.
toString
(),
mimeType:
"
application/json
"
,
text:
JSON
.
stringify
({
connections: stats
.
activeConnections
,
queries: stats
.
queryCount
,
performance: stats
.
avgResponseTime
,
timestamp:
new
Date
()
.
toISOString
()
},
null
,
2
)
}]
};
}
);
Previous
Manifest
Next
New Application Workflow

New Application Workflow
URL: https://docs.liquidmetal.ai/reference/raindrop-mcp/new-application-workflow/
New Application Workflow
The new application workflow is a fully automated, comprehensive process that takes you from initial concept to fully deployed infrastructure. Once you initiate the workflow, Claude Code handles everything automatically - you simply answer questions when prompted. Each phase builds on the previous one, ensuring nothing gets missed and the final result is production-ready.
First time using Claude Code with Raindrop MCP?
Make sure you’ve completed the
Claude Code + Raindrop MCP Setup
tutorial to configure your environment first.
Workflow Overview
The workflow consists of 9 sequential phases, each with specific MCP tools that guide Claude Code through the process. Your only role is to kick off the workflow and answer Claude’s questions when prompted - everything else is automated:
AI-Guided Planning
💡 Idea → 🎯 Init → 👥 Team → 📋 Requirements
↓
Automated
🏗️ Architecture → 🗄️ Database → 📚 Docs → 💻 Code → 🧪 Test → 🚀 Deploy
↓
Result
🌐 Live Application
Session Initialization
(
login
)
Team Setup
(
set_team
) - Optional
Requirements Definition
(
prd_step
)
Database Design
(
prisma_step
) - If SQL databases needed
Documentation Retrieval
(
documentation_step
)
Code Implementation
(
code_step
)
Testing & Validation
(
tests_step
)
Deployment
(
deployment_step
)
Endpoint Verification
(
endpoint_test_step
)
Stay on Track
If Claude gets off track, simply guide him back to the correct MCP tool and automation will continue from where it left off.
What You Get At Each Phase
Phase 1: Session Initialization (
login
)
What You Achieve:
You get a development session with unique tracking that enables team collaboration and resumption at any time. A permanent session ID acts as your project identity throughout development.
Your Input:
None - just initiate the workflow
Phase 2: Team Setup (
set_team
) - Optional
What You Achieve:
Team members receive email invitations and can join your development session. Everyone gets shared access to the same project context and can contribute at any phase.
Your Input:
Team member emails and roles
Phase 3: Requirements Definition (
prd_step
)
What You Achieve:
You get a comprehensive Product Requirements Document that captures every aspect of your application. Claude acts as an expert product manager, asking the right questions to uncover requirements you might not have considered.
Your Input:
Description of your application idea
Answers to clarifying questions about functionality
Final approval of the PRD
Phase 4: Architecture Generation
What You Achieve:
Your application’s complete technical architecture is designed and your development environment is set up. You receive a Git branch, project structure, and infrastructure blueprint ready for implementation.
Your Input:
Application name when prompted
Phase 5: Database Design (
prisma_step
) - If Needed
What You Achieve:
You get production-ready database schemas with proper relationships, type safety, and migration support. Your data models are optimized and ready for scale.
Your Input:
None - automated based on your PRD
Phase 6: Documentation Access (
documentation_step
)
What You Achieve:
All technical documentation needed for your specific architecture is gathered and organized. Claude receives the knowledge needed to implement your exact requirements correctly.
Your Input:
None - automated based on your architecture
Phase 7: Complete Implementation (
code_step
)
What You Achieve:
Your entire application is implemented with production-quality code. All components work together seamlessly with proper error handling, security, and performance optimization.
Your Input:
None - automated based on your PRD and architecture
Phase 8: Quality Assurance (
tests_step
)
What You Achieve:
You gain confidence that your application will work correctly when deployed. All code compiles, types are safe, and components integrate properly.
Your Input:
None - automated validation
Phase 9: Live Deployment (
deployment_step
)
What You Achieve:
Your application is running live on cloud infrastructure with real databases, APIs, and domains. Everything is production-ready and accessible via public URLs.
Your Input:
None - automated deployment
Phase 10: Production Verification (
endpoint_test_step
)
What You Achieve:
You receive confirmation that every feature works correctly in production. Your application is thoroughly tested and ready for users.
Your Input:
None - automated testing
State Management Throughout Workflow
Session State Tracking:
Each phase updates the workflow state (e.g.,
session_started
→
team_set
→
prd_created
)
State determines which MCP tool can be called next
Prevents skipping phases or creating incomplete applications
Enables resumption from any point using
reattach_to_session
Context Preservation:
PRD requirements maintained throughout all phases
Architectural decisions propagated to implementation
Team access and permissions preserved
All generated artifacts stored and versioned
Quality Gates:
Each phase must complete successfully before proceeding
Built-in validation prevents broken deployments
Automatic error recovery and retry mechanisms
Manual intervention points for approval and review
The new application workflow transforms Claude Code from a coding assistant into a complete application development platform, ensuring every project results in a fully functional, deployed application ready for production use.
Previous
MCP Service
Next
Observers

Observers
URL: https://docs.liquidmetal.ai/reference/observers/
Observers
Observers are powerful components in Raindrop that let you execute code in
response to changes in your resources. Think of them as event listeners that
automatically trigger when specific conditions are met in your application.
Types of Observers
Raindrop provides two types of observers to help you build reactive
applications:
Object Observers
: Monitor changes to objects in buckets
Queue Observers
: Process messages as they arrive in queues
Object Observers
Object observers watch for changes to objects in your buckets and execute code
in response. They’re particularly useful when you need to process files after
upload.
To create an object observer, add it to your
raindrop.manifest
.
Note
When you run
raindrop build generate
, Raindrop automatically sets up the function code, bucket configuration, and all required service bindings for your observer.
raindrop.manifest
index.ts
application
"demo"
{
// First define your bucket
bucket
"observed-bucket"
{}
// Then create an observer
observer
"my-observer"
{
source {
bucket
=
"
observed-bucket
"
rule {
// Specify which actions should trigger the observer
actions
=
[
"
PutObject
"
,
"
CompleteMultipartUpload
"
,
"
CopyObject
"
]
}
}
}
}
import
{ Each }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
extends
Each
<
Body
,
Env
> {
async
process
(
message
:
observers
.
BucketEventNotification
)
:
Promise
<
void
> {
console
.
log
(
`
received message:
${
JSON
.
stringify
(message)
}
`
);
}
}
Supported Trigger Actions
Your observer can respond to the following bucket events:
Object Creation Events
PutObject
- Triggers when objects are uploaded directly
CopyObject
- Triggers when objects are copied
CompleteMultipartUpload
- Triggers when multipart uploads finish
Object Deletion Events
DeleteObject
- Triggers on manual object deletion
LifecycleDeletion
- Triggers when objects are deleted by lifecycle rules
Queue Observers
Queue observers process messages as they arrive in a queue. They’re the perfect
solution for handling asynchronous tasks and managing background jobs that
shouldn’t block your main application flow.
Setting up a queue observer is straightforward. First define your queue, then
create an observer that watches it.
Note
When you run
raindrop build generate
, Raindrop automatically sets up the function code, queue configuration, and all required service bindings for your observer.
raindrop.manifest
index.ts
// Define the queue
queue
"observed-queue"
{}
// Create the queue observer
observer
"queue-observer"
{
source {
queue
=
"
observed-queue
"
}
}
import
{ Each }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
extends
Each
<
Body
,
Env
> {
async
process
(
message
:
Body
)
:
Promise
<
void
> {
console
.
log
(
JSON
.
stringify
(
`
received message:
${
message
}
`
));
}
}
export
interface
Body {
}
Observer Base Classes
The Raindrop framework provides abstract base classes for implementing different message processing patterns.
Each<T, Env>
Process messages individually with full control over acknowledgment and retry logic:
import
{ Each, Message, ExecutionContext }
from
'
@liquidmetal-ai/raindrop-framework
'
;
export
default
class
extends
Each
<
NotificationMessage
,
Env
> {
async
process
(
message
:
Message
<
NotificationMessage
>
)
:
Promise
<
void
> {
try
{
await
this
.
sendNotification
(message
.
body
);
message
.
ack
();
// Acknowledge successful processing
}
catch
(error) {
if
(message
.
attempts
<
3
) {
message
.
retry
({ delaySeconds:
60
});
// Retry with delay
}
else
{
console
.
error
(
'
Max retries exceeded:
'
, error);
message
.
ack
();
// Prevent infinite retries
}
}
}
}
Properties:
ctx
:
ExecutionContext
- Execution context for the observer
env
:
Env
- Environment bindings for accessing resources
Abstract Methods:
process(message: Message<T>): Promise<void>
- Process individual messages
Batch<T, Env>
Process multiple messages together for higher throughput:
import
{ Batch, MessageBatch, ExecutionContext }
from
'
@liquidmetal-ai/raindrop-framework
'
;
export
default
class
extends
Batch
<
EmailTask
,
Env
> {
async
process
(
batch
:
MessageBatch
<
EmailTask
>
)
:
Promise
<
void
> {
try
{
// Process all messages in batch
const
emailPromises
=
batch
.
messages
.
map
(
msg
=>
this
.
sendEmail
(msg
.
body
));
await
Promise
.
all
(emailPromises);
batch
.
ackAll
();
// Acknowledge all messages
}
catch
(error) {
// Retry entire batch
batch
.
retryAll
({ delaySeconds:
30
});
}
}
}
Properties:
ctx
:
ExecutionContext
- Execution context for the observer
env
:
Env
- Environment bindings for accessing resources
Abstract Methods:
process(batch: MessageBatch<T>): Promise<void>
- Process message batches
raindrop.manifest
Configure observers in your manifest to respond to resource events:
application
"event-driven-app"
{
bucket
"uploads"
{
# Bucket to observe for file uploads
}
queue
"notifications"
{
# Queue to observe for message processing
}
observer
"file-processor"
{
# Observer for bucket events
source {
bucket
=
"
uploads
"
rule {
actions
=
[
"
PutObject
"
,
"
CompleteMultipartUpload
"
]
prefix
=
"
images/
"
# Optional: filter by key prefix
suffix
=
"
.jpg
"
# Optional: filter by key suffix
}
}
}
observer
"notification-handler"
{
# Observer for queue messages
source {
queue
=
"
notifications
"
batch_size
=
10
# Optional: process in batches
max_batch_timeout
=
5
# Optional: max batch wait time
}
}
observer
"multi-source"
{
# Observer with multiple triggers
source {
bucket
=
"
uploads
"
rule {
actions
=
[
"
DeleteObject
"
]
}
}
source {
queue
=
"
cleanup-tasks
"
}
}
}
Previous
New Application Workflow
Next
Queue

Queue
URL: https://docs.liquidmetal.ai/reference/queue/
Queue
Queue provides durable message queuing for asynchronous processing. You send messages to a queue, and they get processed by consumer functions at a later time.
Queues work with
Observers
to handle message processing. Only a single observer per queue is allowed. When messages arrive, your observer function receives them for processing.
Messages support multiple content types including text, JSON, binary data, and V8-serialized objects. The system handles message persistence, delivery guarantees, and automatic retries.
Creating
Define queues in your
raindrop.manifest
:
application
"demo-app"
{
queue
"demo-queue"
{}
}
Accessing
Access your queue through environment bindings in your code:
export
default
{
async
fetch
(
request
,
env
)
{
await
env
.
DEMO_QUEUE
.
send
({ userId:
123
, action:
"
process
"
});
return
new
Response
(
"
Message sent
"
);
}
};
Core Concepts
Main Interfaces
Queue
- Send individual messages or batches to the queue
Message
- Represents a received message with processing controls
MessageBatch
- Group of messages processed together
Core Data Types
QueueContentType
// Supported message content formats
type
QueueContentType
=
'
text
'
|
'
bytes
'
|
'
json
'
|
'
v8
'
;
MessageSendRequest
// Configuration for sending a message in a batch
interface
MessageSendRequest<
Body
=
unknown
> {
body
:
Body
;
// Message content
contentType
?:
QueueContentType
;
// Content format
delaySeconds
?:
number
;
// Processing delay
}
QueueSendOptions
// Options for sending individual messages
interface
QueueSendOptions {
contentType
?:
QueueContentType
;
// Message format
delaySeconds
?:
number
;
// Processing delay (default: 0)
}
QueueSendBatchOptions
// Options for batch message sending
interface
QueueSendBatchOptions {
delaySeconds
?:
number
;
// Delay for all messages in batch
}
QueueRetryOptions
// Configuration for message retry attempts
interface
QueueRetryOptions {
delaySeconds
?:
number
;
// Delay before retry
}
System Limits
Maximum message size: 128KB
Maximum consumer batch size: 100 messages
Maximum messages per sendBatch call: 100 (or 256KB total)
Maximum message retries: 100
Maximum batch wait time: 60 seconds
Per-queue throughput: 5,000 messages per second
Message retention period: 4 days (default)
send
Input
Output
send
(message: Body, options
?:
QueueSendOptions):
Promise
<
void
>
Promise
<
void
>
// Resolves when message is queued
Example
Send a JSON message to the queue:
// Send user registration data for processing
await
env
.
USER_QUEUE
.
send
(
{ userId:
456
, email:
"
user@example.com
"
, action:
"
welcome
"
},
{ contentType:
"
json
"
, delaySeconds:
30
}
);
sendBatch
Input
Output
sendBatch
(
messages: Iterable
<
MessageSendRequest
<
Body
>>
,
options
?:
QueueSendBatchOptions
):
Promise
<
void
>
Promise
<
void
>
// Resolves when all messages are queued
Example
Send multiple messages with different configurations:
// Send batch of notification messages
const
messages
=
[
{ body: { type:
"
email
"
, recipient:
"
user1@example.com
"
}, contentType:
"
json
"
},
{ body: { type:
"
sms
"
, recipient:
"
+1234567890
"
}, delaySeconds:
60
},
{ body:
"
Push notification content
"
, contentType:
"
text
"
}
];
await
env
.
NOTIFICATION_QUEUE
.
sendBatch
(messages, { delaySeconds:
10
});
ack
Input
Output
ack
():
void
void
// Marks message as successfully processed
Example
Acknowledge successful message processing:
// Process message and acknowledge completion
export
default
{
async
queue
(
batch
,
env
)
{
for
(
const
message
of
batch
.
messages
) {
const
data
=
message
.
body
;
await
processUserData
(data);
message
.
ack
();
// Mark as successfully processed
}
}
};
retry
Input
Output
retry
(options
?:
QueueRetryOptions):
void
void
// Schedules message for retry processing
Example
Retry message processing with delay:
// Retry failed message processing after 120 seconds
export
default
{
async
queue
(
batch
,
env
)
{
for
(
const
message
of
batch
.
messages
) {
try
{
await
processMessage
(message
.
body
);
message
.
ack
();
}
catch
(error) {
message
.
retry
({ delaySeconds:
120
});
}
}
}
};
ackAll
Input
Output
ackAll
():
void
void
// Marks all messages in batch as processed
Example
Acknowledge all messages in a batch:
// Process entire batch and acknowledge all messages
export
default
{
async
queue
(
batch
,
env
)
{
const
results
= await
Promise
.
allSettled
(
batch
.
messages
.
map
(
msg
=>
processMessage
(msg
.
body
))
);
if
(results
.
every
(
r
=>
r
.
status
===
"
fulfilled
"
)) {
batch
.
ackAll
();
// All messages processed successfully
}
}
};
retryAll
Input
Output
retryAll
(options
?:
QueueRetryOptions):
void
void
// Schedules all messages for retry processing
Example
Retry all messages in a batch:
// Retry entire batch if processing fails
export
default
{
async
queue
(
batch
,
env
)
{
try
{
await
processBatch
(batch
.
messages
);
batch
.
ackAll
();
}
catch
(error) {
batch
.
retryAll
({ delaySeconds:
300
});
// Retry in 5 minutes
}
}
};
Previous
Observers
Next
Reattach to Session

Reattach to Session
URL: https://docs.liquidmetal.ai/reference/raindrop-mcp/reattach-session/
Reattach to Session
The reattach workflow allows you to resume development on any existing Raindrop project exactly where you left off. Whether you stopped mid-development, switched to another project, or are returning days later, reattaching restores complete context and continues seamlessly.
How Reattachment Works
Reattachment is instant and automatic. Once you provide your session and timeline IDs, Claude Code immediately has access to:
Your complete PRD and all requirements
All architectural decisions and infrastructure setup
Generated code and current implementation state
Team member access and collaboration context
Current development phase and next steps
Your involvement:
Provide session IDs and continue from where the workflow guides you.
Starting Reattachment
Using Shorthand Command:
/reattach-raindrop-session [session_id] [timeline_id]
Using Direct MCP Call:
Claude, call the liquidmetal-staging:reattach_to_session MCP tool with session_id "your-session-id" and timeline_id "your-timeline-id".
Finding Your Session IDs:
You can instruct Claude Code to look in your
.raindrop.config.local.json
file to find your session and timeline IDs.
What You Achieve with Reattachment
Complete Context Restoration
You get immediate access to your entire project history. Claude Code knows exactly what you were building, why specific decisions were made, and how all components fit together. No time wasted explaining or reconstructing context.
Seamless Continuation
You receive clear guidance on what to do next based on your current development phase. Whether you were in the middle of requirements gathering, code implementation, or deployment, the workflow continues exactly where you left off.
Preserved Team Access
All team members maintain their access and can continue collaborating. Invitations remain active and shared context is immediately available to everyone on the team.
Infrastructure State Awareness
You get visibility into your current deployment state, including what infrastructure is running, which endpoints are live, and what still needs to be completed.
Reattachment Scenarios
Mid-Development Resume
- Pick up development in the exact phase where you stopped
Cross-Session Project Switching
- Switch between multiple projects seamlessly
Team Member Joining
- New team members get instant access to complete project context
Long-Term Project Return
- Return to projects after weeks or months with complete context restoration
Error Recovery
- Resume from a stable point after addressing workflow issues
Infrastructure Troubleshooting
- Continue after resolving deployment or provisioning problems
Session States and Next Actions
When you reattach, you’ll see your current state and what happens next:
session_started
- Set up team members or begin requirements definition
team_set
or
prd_created
- Continue with architecture generation and manifest creation
manifest_created
- Proceed with database schema design or documentation retrieval
documentation_retrieved
- Continue with complete code implementation
coding_started
- Move to testing and validation
tests_written
- Proceed with deployment to live infrastructure
deployed
- Continue with endpoint testing and final verification
tested
- Application is complete and ready for users
Stay on Track
If Claude gets off track, simply guide him back to the correct MCP tool and automation will continue from where it left off.
Reattachment transforms development from linear, session-bound work into flexible, resumable project management where you can always pick up exactly where you left off with complete context and team coordination.
Previous
Queue
Next
Secrets

Application Secrets
URL: https://docs.liquidmetal.ai/reference/secrets/
Application Secrets
Raindrop Build provides a secure way to handle sensitive information through its secrets management system. Secrets are encrypted values that are accessible across your entire application, allowing you to safely store and use API keys, credentials, and other confidential data.
Setting Up Secrets
Follow these steps to add and configure secrets in your application:
Define the secret in your manifest file by adding a new environment binding:
env
"TOP_LEVEL_BINDING_NAME"
{
secret
=
true
}
service
"service-with-env"
{
env
"SERVICE_BINDING_NAME"
{
secret
=
true
}
}
Set the secret value using the Raindrop CLI:
Terminal window
raindrop
build
env
set
env:TOP_LEVEL_BINDING_NAME
<secret_value>
raindrop
build
env
set
service-with-env:env:SERVICE_BINDING_NAME
<secret_value>
Generate the necessary bindings:
Terminal window
raindrop
build
generate
Deploy your updated application:
Terminal window
raindrop
build
deploy
Caution
Important:
The
raindrop generate
command currently resets all configured secrets. You’ll need to reconfigure your secrets using
raindrop build env set
after each generate operation. Our team is working on a solution to maintain secret persistence across generate operations.
Previous
Reattach to Session
Next
Service

Service
URL: https://docs.liquidmetal.ai/reference/services/
Service
The
Service
component provides the foundation for building HTTP services in Raindrop applications. Services handle incoming HTTP requests and can communicate with other services through type-safe service-to-service calls. Every Service must implement a
fetch
method, even when used exclusively for internal service-to-service communication.
Services support three visibility levels that control how they can be accessed. Public services receive automatic URL assignment for external access. Protected services require authentication for access. Private services can only be accessed through service-to-service calls from other services within the same application.
Service-to-service communication happens through the environment bindings, allowing services to call methods on other services using
env.SERVICENAME.methodName()
. These calls must be awaited and support passing structured clonable objects including Blobs, ArrayBuffers, and Request objects. Each service receives its own execution context, enabling independent background task management.
Prerequisites
Understanding of HTTP request/response patterns
Familiarity with async/await JavaScript
Knowledge of TypeScript generics for type-safe environment bindings
Basic understanding of service environments
Creating
Define services in your
raindrop.manifest
file with the appropriate visibility level:
application
"my-app"
{
service
"api-gateway"
{
visibility
=
"
public
"
}
service
"business-logic"
{
visibility
=
"
private
"
}
service
"admin-api"
{
visibility
=
"
protected
"
}
}
Accessing
Import the Service class and extend it to create your service implementation:
import
{ Service }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
// Handle HTTP requests
const
result
= await
this
.
env
.
BUSINESS_LOGIC
.
processData
(
{ id:
123
}
);
return
new
Response
(
JSON
.
stringify
(result));
}
}
Core Concepts
Main Interfaces
Service<Env>
- Base class for all HTTP service implementations
ServiceStub<T>
- Type-safe stub for service-to-service communication
ExecutionContext
- Runtime context for managing background tasks
Env
- Generated environment type containing service bindings
Core Data Types
Service Class
abstract
class
Service
<
Env
> {
ctx
:
ExecutionContext
;
// Runtime context for background tasks
env
:
Env
;
// Environment bindings including other services
constructor
(
ctx
:
ExecutionContext
,
env
:
Env
)
;
}
ServiceStub Type
// Converts service methods to async Promise-based calls
type
ServiceStub<
T
extends
Service
<
Env
>,
Env
=
unknown
>
=
Stub
<
T
>;
ExecutionContext Type
type
ExecutionContext
=
{
waitUntil
(
promise
:
Promise
<
any
>
)
:
void
;
// Register background tasks
};
System Limits
Service-to-service calls accumulate execution time as they must be awaited
Each service receives independent execution context
Structured clonable objects required for inter-service data passing
fetch Method
Example
Implementing the required fetch handler for HTTP requests:
import
{ Service }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
ApiGateway
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
const
url
=
new
URL
(request
.
url
);
// Route to appropriate handler
if
(url
.
pathname
===
'
/users
'
) {
// Call private service for business logic
const
users
= await
this
.
env
.
USER_SERVICE
.
getAllUsers
();
return
new
Response
(
JSON
.
stringify
(users), {
headers: {
'
Content-Type
'
:
'
application/json
'
}
});
}
return
new
Response
(
'
Not Found
'
, { status:
404
});
}
}
Input
Output
// HTTP Request object
request: Request
// HTTP Response object
Promise
<
Response
>
Service-to-Service Communication
Example
Calling methods on other services through environment bindings:
import
{ Service }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
PublicAPI
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
const
{
searchParams
} =
new
URL
(request
.
url
);
const
userId
=
searchParams
.
get
(
'
userId
'
);
// Call private service method - must await
const
userData
= await
this
.
env
.
USER_SERVICE
.
getUserById
(userId);
const
orders
= await
this
.
env
.
ORDER_SERVICE
.
getOrdersByUser
(userId);
return
new
Response
(
JSON
.
stringify
({ user: userData, orders }));
}
}
// Private service implementation
export
class
UserService
extends
Service
<
Env
> {
// Required fetch implementation even for private services
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
return
new
Response
(
'
Not Implemented
'
, { status:
501
});
}
async
getUserById
(
userId
:
string
)
{
// Business logic here
return
{ id: userId, name:
'
John Doe
'
};
}
}
Input
Output
// Service method parameters
userId: string
// Can be any structured clonable type
// Async wrapped return value
Promise
<
{ id: string; name: string }
>
Background Tasks with ExecutionContext
Example
Using execution context for background operations:
import
{ Service }
from
'
@liquidmetal-ai/raindrop-framework
'
;
import
{ Env }
from
'
./raindrop.gen
'
;
export
default
class
DataProcessor
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
const
data
= await
request
.
json
();
// Register background task - won't block response
this
.
ctx
.
waitUntil
(
this
.
processInBackground
(data));
return
new
Response
(
'
Processing started
'
, { status:
202
});
}
private
async
processInBackground
(
data
:
any
)
{
// Long-running operation
await
this
.
env
.
ANALYTICS_SERVICE
.
analyze
(data);
await
this
.
env
.
NOTIFICATION_SERVICE
.
sendComplete
(data
.
id
);
}
}
Input
Output
// Promise to execute in background
promise:
Promise
<
any
>
// No return value
void
Previous
Secrets
Next
SmartBucket

SmartBuckets
URL: https://docs.liquidmetal.ai/reference/smartbucket/
SmartBuckets
SmartBuckets is Raindrop’s RAG-in-a-box building block. Any time you need RAG in your Raindrop app, you should use SmartBuckets. It provides multi-modal indexing capabilities that automatically process uploaded content for AI-powered search and retrieval.
SmartBuckets extends standard Bucket functionality with semantic search methods. All standard bucket operations work identically while adding search(), chunkSearch(), documentChat(), and getPaginatedResults() methods. Files uploaded to SmartBuckets become immediately searchable through natural language queries without requiring manual preprocessing or separate search infrastructure.
The system automatically extracts text from documents and images from PDFs to create searchable indexes. This enables semantic search across stored files, making SmartBuckets ideal for document management systems, knowledge bases, and applications requiring content discovery. Multi-modal indexing means SmartBuckets can process various file types including extracting and indexing images from PDFs for comprehensive search operations.
Creating SmartBuckets
Define SmartBuckets in your application manifest. SmartBucket names must be unique within your application and follow kebab-case conventions.
application
"demo-app"
{
smartbucket
"demo-sb"
{}
}
Accessing SmartBuckets
SmartBuckets are accessed through environment bindings. The SmartBucket name from your manifest becomes an uppercase environment variable with underscores replacing dashes.
// Access SmartBucket via environment binding
const
results
= await
this
.
env
.
DEMO_SB
.
search
(
{
input:
"
search query
"
,
requestId:
"
req-1
"
}
);
Core Concepts
Main Interfaces
SmartBucket
- Extends Bucket with AI search capabilities
SearchInput
,
SearchOutput
- Semantic search operations
RagSearchInput
,
RagSearchOutput
- Chunk-based RAG search
DocumentChatInput
,
DocumentChatOutput
- Document Q&A
GetPaginatedResultsInput
,
GetPaginatedResultsOutput
- Result pagination
BucketObject
- Metadata returned from storage operations
BucketObjectBody
- Object with content body and read methods
BucketPutOptions
- Options for put operations
BucketGetOptions
- Options for get operations
BucketListOptions
- Options for list operations
SearchResult
Search operations return results with relevance scores and extracted content. Each result includes text content, source reference, and semantic similarity score.
interface
SearchResult {
chunkSignature
?:
string
;
// Unique chunk identifier
text
?:
string
;
// Extracted text content
source
?:
string
;
// Source file reference
payloadSignature
?:
string
;
// Content payload identifier
score
?:
number
;
// Relevance score (0-1)
embed
?:
Float32Array
;
// Vector embedding data
type
?:
string
;
// Content type classification
}
PaginationInfo
Search methods return pagination details for navigating large result sets. Pagination enables efficient browsing through multiple pages of search results.
interface
PaginationInfo {
total
:
number
;
// Total results available
page
:
number
;
// Current page number
pageSize
:
number
;
// Results per page
totalPages
:
number
;
// Total pages available
hasMore
:
boolean
;
// More results available
}
BucketObject
Standard bucket operations return metadata about stored objects. This interface provides details about object version, size, checksums, and custom metadata.
interface
BucketObject {
key
:
string
;
// Object key
version
:
string
;
// Version identifier
size
:
number
;
// Object size in bytes
etag
:
string
;
// Entity tag
httpEtag
:
string
;
// HTTP entity tag
checksums
:
BucketChecksums
;
// Object checksums
uploaded
:
Date
;
// Upload timestamp
httpMetadata
?:
BucketHTTPMetadata
;
// HTTP metadata
customMetadata
?:
Record
<
string
,
string
>;
// Custom metadata
storageClass
?:
string
;
// Storage class
}
put
Stores an object in the SmartBucket with automatic indexing.
Input
Options
Output
put
(
key: string,
value: ReadableStream
|
ArrayBuffer
|
ArrayBufferView
|
string
|
null
|
Blob,
options
?:
BucketPutOptions
):
Promise
<
BucketObject
>
interface
BucketPutOptions {
httpMetadata
?:
BucketHTTPMetadata
|
Headers
;
customMetadata
?:
Record
<
string
,
string
>;
md5
?:
ArrayBuffer
|
string
;
sha1
?:
ArrayBuffer
|
string
;
sha256
?:
ArrayBuffer
|
string
;
sha384
?:
ArrayBuffer
|
string
;
sha512
?:
ArrayBuffer
|
string
;
storageClass
?:
string
;
}
interface
BucketHTTPMetadata {
contentType
?:
string
;
contentLanguage
?:
string
;
contentDisposition
?:
string
;
contentEncoding
?:
string
;
cacheControl
?:
string
;
cacheExpiry
?:
Date
;
}
interface
BucketObject {
key
:
string
;
version
:
string
;
size
:
number
;
etag
:
string
;
httpEtag
:
string
;
checksums
:
BucketChecksums
;
uploaded
:
Date
;
httpMetadata
?:
BucketHTTPMetadata
;
customMetadata
?:
Record
<
string
,
string
>;
storageClass
?:
string
;
}
Supported content types:
image/png
,
image/jpeg
,
audio/webm
,
audio/mpeg
,
audio/wav
,
audio/mp4
,
application/pdf
,
text/plain
.
Example
// Upload file with metadata
const
result
= await
this
.
env
.
DEMO_SB
.
put
(
"
documents/report.pdf
"
,
fileContent
,
{
httpMetadata: {
contentType:
"
application/pdf
"
,
cacheControl:
"
public, max-age=3600
"
},
customMetadata: {
author:
"
Jane Smith
"
,
department:
"
Research
"
}
}
);
console
.
log
(
`
Uploaded:
${
result
.
key
}
(
${
result
.
size
}
bytes)
`
);
get
Retrieves an object from the SmartBucket.
Input
Options
Output
get
(
key: string,
options
?:
BucketGetOptions
):
Promise
<
BucketObjectBody
|
null
>
interface
BucketGetOptions {
range
?:
BucketRange
|
Headers
;
}
interface
BucketRange {
offset
?:
number
;
// Starting byte offset
length
?:
number
;
// Number of bytes to read
suffix
?:
number
;
// Read last N bytes
}
interface
BucketObjectBody
extends
BucketObject
{
body
:
ReadableStream
;
bodyUsed
:
boolean
;
arrayBuffer
()
:
Promise
<
ArrayBuffer
>;
text
()
:
Promise
<
string
>;
json
<
T
=
unknown
>
()
:
Promise
<
T
>;
blob
()
:
Promise
<
Blob
>;
}
Example
// Retrieve and read object content
const
object
= await
this
.
env
.
DEMO_SB
.
get
(
"
documents/report.pdf
"
);
if
(object) {
const
text
= await
object
.
text
();
console
.
log
(
`
Retrieved:
${
object
.
key
}
`
);
console
.
log
(
`
Content:
${
text
.
substring
(
0
,
100
)
}
...
`
);
}
head
Retrieves object metadata without downloading content.
Input
Output
head
(key: string):
Promise
<
BucketObject
|
null
>
interface
BucketObject {
key
:
string
;
version
:
string
;
size
:
number
;
etag
:
string
;
httpEtag
:
string
;
checksums
:
BucketChecksums
;
uploaded
:
Date
;
httpMetadata
?:
BucketHTTPMetadata
;
customMetadata
?:
Record
<
string
,
string
>;
storageClass
?:
string
;
}
Example
// Get metadata only
const
metadata
= await
this
.
env
.
DEMO_SB
.
head
(
"
documents/report.pdf
"
);
if
(metadata) {
console
.
log
(
`
Size:
${
metadata
.
size
}
bytes
`
);
console
.
log
(
`
Uploaded:
${
metadata
.
uploaded
}
`
);
console
.
log
(
`
Author:
${
metadata
.
customMetadata
?.
author
}
`
);
}
delete
Deletes one or more objects from the SmartBucket.
Input
delete
(
keys
:
string
|
string
[]
)
:
Promise
<
void
>
Example
// Delete single object
await
this
.
env
.
DEMO_SB
.
delete
(
"
documents/old-report.pdf
"
);
// Delete multiple objects
await
this
.
env
.
DEMO_SB
.
delete
([
"
documents/draft-1.pdf
"
,
"
documents/draft-2.pdf
"
]);
list
Lists objects in the SmartBucket with optional filtering.
Input
Options
Output
list
(options
?:
BucketListOptions):
Promise
<
BucketObjects
>
interface
BucketListOptions {
limit
?:
number
;
// Max results (default: 100, max: 250)
prefix
?:
string
;
// Filter by key prefix
cursor
?:
string
;
// Pagination token
delimiter
?:
string
;
// Delimiter for hierarchy (default: '/')
startAfter
?:
string
;
// Start after this key
}
interface
BucketObjects {
objects
:
BucketObject
[];
// Matching objects
delimitedPrefixes
:
string
[];
// Common prefixes
truncated
:
boolean
;
// More results available
cursor
?:
string
;
// Pagination token
}
Example
// List all PDF documents
const
result
= await
this
.
env
.
DEMO_SB
.
list
(
{
prefix:
"
documents/
"
,
limit:
50
}
);
result
.
objects
.
forEach
(
obj
=>
{
console
.
log
(
`
${
obj
.
key
}
(
${
obj
.
size
}
bytes)
`
);
});
// Handle pagination
if
(result
.
truncated
) {
const
nextPage
= await
this
.
env
.
DEMO_SB
.
list
(
{
prefix:
"
documents/
"
,
cursor:
result
.
cursor
}
);
}
search
Performs semantic search across all bucket content using natural language queries. The
requestId
parameter defaults to a generated ULID if not provided. The
partition
parameter defaults to
'default'
.
Input
Output
interface
SearchInput {
input
:
string
;
// Natural language search query
requestId
?:
string
;
// Request tracking ID (defaults to generated ULID)
partition
?:
string
;
// Data partition filter (defaults to 'default')
}
interface
SearchOutput {
results
:
SearchResult
[];
// Ranked search matches
pagination
:
PaginationInfo
;
// Pagination details
}
Example
// Search for relevant documents
const
results
= await
this
.
env
.
DEMO_SB
.
search
(
{
input:
"
climate change research
"
,
requestId:
"
search-001
"
}
);
// Process search results
results
.
results
.
forEach
(
result
=>
{
console
.
log
(
`
Found:
${
result
.
source
}
(score:
${
result
.
score
}
)
`
);
});
chunkSearch
Returns specific text chunks from documents for RAG applications. The
requestId
parameter defaults to a generated ULID if not provided. The
partition
parameter defaults to
'default'
.
Input
Output
interface
RagSearchInput {
input
:
string
;
// Search query for chunks
requestId
?:
string
;
// Request ID (defaults to generated ULID)
partition
?:
string
;
// Partition filter (defaults to 'default')
}
interface
RagSearchOutput {
results
:
SearchResult
[];
// Relevant text chunks
}
Example
// Get relevant chunks for context
const
chunks
= await
this
.
env
.
DEMO_SB
.
chunkSearch
(
{
input:
"
renewable energy costs
"
,
requestId:
"
chunk-001
"
}
);
// Use chunks as context
const
context
=
chunks
.
results
.
map
(
chunk
=>
chunk
.
text
)
.
join
(
'
\n
'
);
documentChat
Generates answers to questions about specific document content using AI.
Input
Output
interface
DocumentChatInput {
objectId
:
string
;
// Target document ID
input
:
string
;
// Question or prompt
requestId
:
string
;
// Request tracking ID
partition
?:
string
;
// Optional partition filter
}
interface
DocumentChatOutput {
answer
:
string
;
// Generated response
}
Example
// Ask question about document
const
answer
= await
this
.
env
.
DEMO_SB
.
documentChat
(
{
objectId:
"
report.pdf
"
,
input:
"
What are the main findings?
"
,
requestId:
"
chat-001
"
}
);
// Display generated answer
console
.
log
(answer
.
answer
);
getPaginatedResults
Retrieves additional pages from previous search operations. The
page
parameter defaults to
1
,
pageSize
defaults to
15
, and
partition
defaults to
'default'
.
Input
Output
interface
GetPaginatedResultsInput {
requestId
:
string
;
// Previous search request ID
page
?:
number
;
// Target page number (defaults to 1)
pageSize
?:
number
;
// Results per page (defaults to 15)
partition
?:
string
;
// Partition filter (defaults to 'default')
}
interface
GetPaginatedResultsOutput {
results
:
SearchResult
[];
// Page results
pagination
:
PaginationInfo
;
// Updated pagination
}
Example
// Get next page of results
const
nextPage
= await
this
.
env
.
DEMO_SB
.
getPaginatedResults
(
{
requestId:
"
search-001
"
,
page:
2
,
pageSize:
20
}
);
// Check pagination status
console
.
log
(
`
Page
${
nextPage
.
pagination
.
page
}
of
${
nextPage
.
pagination
.
totalPages
}
`
);
Previous
Service
Next
SmartMemory

SmartMemory
URL: https://docs.liquidmetal.ai/reference/smartmemory/
SmartMemory
SmartMemory provides a memory system for AI agents with four distinct memory layers that work together to create persistent, intelligent applications. The system manages active conversations, historical sessions, structured knowledge, and reusable procedures through a unified interface.
The architecture separates concerns across memory types: working memory handles active sessions, episodic memory stores completed session summaries, semantic memory holds structured knowledge documents, and procedural memory maintains templates and skills. This separation allows AI agents to maintain context while building long-term capabilities.
Key benefits include multi-layered memory architecture, vector-based semantic search, automatic session summarization, and isolated session management with timeline organization.
Creating
Configure SmartMemory in your raindrop.manifest file within an application block:
application
"ai-assistant"
{
smartmemory
"agent_memory"
{}
}
Accessing
Use SmartMemory in your services through the environment interface. All SmartMemory operations are asynchronous and return Promises:
export
default
class
extends
Service
<
Env
> {
async
fetch
(
request
:
Request
)
:
Promise
<
Response
> {
// Get the SmartMemory binding from environment
const
memory
=
this
.
env
.
AGENT_MEMORY
;
// Start a new working memory session
const
{
sessionId
,
workingMemory
} = await
memory
.
startWorkingMemorySession
();
return
new
Response
(
`
Started session:
${
sessionId
}
`
);
}
};
Core Concepts
Main Interfaces
SmartMemory
- Root interface for memory management and session control
SmartWorkingMemory
- Active session memory with timeline organization
SmartProceduralMemory
- Persistent storage for reusable procedures and skills
Core Data Types
SessionId
export
type
SessionId
=
string
;
// Unique identifier for working memory sessions
// Used to track and restore conversation contexts
MemoryEntry
export
type
MemoryEntry
=
{
id
:
string
;
// Unique entry identifier
in
:
SessionId
;
// Session this entry belongs to
timeline
:
string
;
// Timeline organization (defaults to "*defaultTimeline")
by
:
string
;
// Entry originator
dueTo
:
string
;
// Entry cause or trigger
content
:
string
;
// Actual memory content
at
:
Date
;
// Timestamp when entry was created
key
?:
string
;
// Optional metadata for filtering
agent
?:
string
;
// Optional agent name that created this entry
};
NewMemoryEntry
export
type
NewMemoryEntry
=
{
timeline
?:
string
;
// Optional timeline (defaults to "*defaultTimeline")
key
?:
string
;
// Optional metadata for filtering
content
:
string
;
// Required memory content
agent
?:
string
;
// Optional agent name
sessionId
?:
string
;
// Optional explicit session ID
at
?:
Date
;
// Optional timestamp (defaults to current time)
};
ProcedureEntry
export
type
ProcedureEntry
=
{
key
:
string
;
// Procedure identifier
value
:
string
;
// Procedure content or template
createdAt
:
Date
;
// Creation timestamp
updatedAt
:
Date
;
// Last modification timestamp
};
Working Memory Methods
getWorkingMemorySession
Input
Output
sessionId: string
Promise
<
ActorStub
<
SmartWorkingMemory
>>
Example
Get access to existing working memory session
// Retrieve an existing working memory session
const
sessionId
=
"
session-123
"
;
const
workingMemory
= await
memory
.
getWorkingMemorySession
(sessionId);
// Use the working memory session
const
entries
= await
workingMemory
.
getMemory
(
{ nMostRecent:
10
}
);
startWorkingMemorySession
Input
Output
// No parameters required
Promise
<{
sessionId
:
SessionId
;
workingMemory
:
ActorStub
<
SmartWorkingMemory
>;
}>
Example
Create new working memory session for conversation
// Start a new working memory session
const {
sessionId
,
workingMemory
} = await
memory
.
startWorkingMemorySession
();
// Add first memory entry to the session
await
workingMemory
.
putMemory
({
content:
"
User started new conversation about project planning
"
,
agent:
"
assistant
"
});
rehydrateSession
Input
Output
sessionId: string
summaryOnly
?:
boolean
Promise
<{
sessionId
:
string
;
workingMemory
:
ActorStub
<
SmartWorkingMemory
>;
success
:
boolean
;
message
:
string
;
entriesRestored
?:
number
;
}>
Example
Restore previous session from episodic memory
// Restore a previous session with full conversation history
const
result
= await
memory
.
rehydrateSession
(
"
session-123
"
,
false
);
if
(result
.
success
) {
console
.
log
(
`
Restored
${
result
.
entriesRestored
}
entries
`
);
// Continue conversation with restored context
const
workingMemory
=
result
.
workingMemory
;
}
endSession
Input
Output
flush: boolean
Promise
<
void
>
Example
End working memory session with optional flush to long-term storage
// End the session and flush to episodic memory
await
workingMemory
.
endSession
(
true
);
// Session is now stored in episodic memory for future retrieval
getMemory
Input
Output
entry: WorkingMemoryQuery
=
{
timeline?: string;
// defaults to "*defaultTimeline"
key
?:
string;
// optional metadata filtering
nMostRecent
?:
number;
// defaults to 'all'
startTime
?:
Date;
// optional time range start
endTime
?:
Date;
// optional time range end
}
Promise
<
MemoryEntry[]
|
null
>
Example
Retrieve exact matching memory entries from working session
// Get recent memories from specific timeline
const
memories
= await
workingMemory
.
getMemory
(
{
timeline:
"
user_preferences
"
,
nMostRecent:
5
}
);
// Process retrieved memories
if
(memories) {
memories
.
forEach
(
entry
=>
{
console
.
log
(
`
${
entry
.
at
}
:
${
entry
.
content
}
`
);
});
}
searchMemory
Input
Output
terms: WorkingMemorySearchQuery
=
{
timeline?: string;
// defaults to "*defaultTimeline"
terms: string;
// required search terms
nMostRecent
?:
number;
// defaults to 'all'
startTime
?:
Date;
// optional time range start
endTime
?:
Date;
// optional time range end
}
Promise
<
MemoryEntry[]
|
null
>
Example
Search working memory for entries similar to given terms
// Search for memories related to specific topic
const
results
= await
workingMemory
.
searchMemory
(
{
terms:
"
user authentication
"
,
nMostRecent:
10
}
);
// Review search results
if
(results) {
results
.
forEach
(
entry
=>
{
console
.
log
(
`
Found:
${
entry
.
content
}
`
);
});
}
putMemory
Input
Output
entry: NewMemoryEntry
=
{
timeline?: string;
// defaults to "*defaultTimeline"
key
?:
string;
// optional metadata
content: string;
// required memory content
agent
?:
string;
// optional agent name
sessionId
?:
string;
// optional explicit session ID
at
?:
Date;
// optional timestamp
}
Promise
<
string
>
Example
Add new memory entry to working session
// Add memory entry with metadata
const
entryId
= await
workingMemory
.
putMemory
(
{
content:
"
User prefers dark theme and compact layout
"
,
key:
"
ui_preferences
"
,
agent:
"
settings_handler
"
}
);
console
.
log
(
`
Created memory entry:
${
entryId
}
`
);
deleteMemory
Input
Output
entryId: string
Promise
<
void
>
Example
Remove specific memory entry by ID
// Delete a specific memory entry
await
workingMemory
.
deleteMemory
(
"
entry-789
"
);
console
.
log
(
"
Memory entry deleted
"
);
summarizeMemory
Input
Output
memories: MemoryEntry[]
systemPrompt
?:
string
Promise
<{
summary
:
string
;
entries
:
Record
<
string
,
MemoryEntry
[]>;
metadata
:
{
duration
:
number
;
timelineCount
:
number
;
entryCount
:
number
;
agent
:
string
;
};
}>
Example
Generate summary of memory entries using AI model
// Get recent memories and create summary
const
memories
= await
workingMemory
.
getMemory
(
{ nMostRecent:
20
}
);
if
(memories) {
const
summary
= await
workingMemory
.
summarizeMemory
(memories);
console
.
log
(
`
Session summary:
${
summary
.
summary
}
`
);
console
.
log
(
`
Processed
${
summary
.
metadata
.
entryCount
}
entries
`
);
}
Episodic Memory Methods
searchEpisodicMemory
Input
Output
terms: string
options
?:
{
nMostRecent?: number;
// defaults to 'all'
startTime
?:
Date;
endTime
?:
Date;
}
Promise
<{
results
:
Array
<{
sessionId
:
string
;
summary
:
string
;
agent
:
string
;
entryCount
:
number
;
timelineCount
:
number
;
duration
:
number
;
createdAt
:
Date
;
score
?:
number
;
}>;
pagination
:
{
total
:
number
;
page
:
number
;
pageSize
:
number
;
totalPages
:
number
;
hasMore
:
boolean
;
};
}>
Example
Search historical conversations for relevant context
// Search for previous discussions about specific topics
const
results
= await
memory
.
searchEpisodicMemory
(
"
database optimization
"
, {
nMostRecent:
5
}
);
// Review relevant past sessions
results
.
results
.
forEach
(
session
=>
{
console
.
log
(
`
Session
${
session
.
sessionId
}
:
${
session
.
summary
}
`
);
});
Semantic Memory Methods
getSemanticMemory
Input
Output
objectId: string
Promise
<{
success
:
boolean
;
document
?:
Record
<
string
,
unknown
>;
error
?:
string
;
}>
Example
Retrieve specific knowledge document
// Get a specific knowledge document by ID
const
result
= await
memory
.
getSemanticMemory
(
"
doc-456
"
);
if
(result
.
success
&&
result
.
document
) {
// Use the retrieved knowledge document
console
.
log
(
"
Knowledge retrieved:
"
, result
.
document
);
}
searchSemanticMemory
Input
Output
needle: string
Promise
<{
success
:
boolean
;
documentSearchResponse
?:
{
results
:
Array
<{
chunkSignature
?:
string
;
text
?:
string
;
source
?:
string
|
{ object
?:
string
};
payloadSignature
?:
string
;
score
?:
number
;
embed
?:
Float32Array
;
type
?:
string
;
}>;
};
error
?:
string
;
}>
Example
Search knowledge base for relevant information
// Search semantic memory for related knowledge
const
results
= await
memory
.
searchSemanticMemory
(
"
API authentication patterns
"
);
if
(results
.
success
&&
results
.
documentSearchResponse
) {
// Process search results
results
.
documentSearchResponse
.
results
.
forEach
(
result
=>
{
console
.
log
(
`
Found:
${
result
.
text
}
(score:
${
result
.
score
}
)
`
);
});
}
putSemanticMemory
Input
Output
document: Record
<
string, unknown
>
Promise
<{
success
:
boolean
;
objectId
?:
string
;
error
?:
string
;
}>
Example
Store knowledge document in semantic memory
// Store new knowledge document
const
document
= {
title:
"
API Best Practices
"
,
content:
"
Always validate input parameters and handle errors gracefully...
"
,
category:
"
development
"
,
tags:
[
"
api
"
,
"
security
"
,
"
validation
"
]
}
;
const
result
= await
memory
.
putSemanticMemory
(document);
if
(result
.
success
) {
console
.
log
(
`
Stored document with ID:
${
result
.
objectId
}
`
);
}
deleteSemanticMemory
Input
Output
objectId: string
Promise
<{
success
:
boolean
;
error
?:
string
;
}>
Example
Remove knowledge document from semantic memory
// Delete a knowledge document
const
result
= await
memory
.
deleteSemanticMemory
(
"
doc-456
"
);
if
(result
.
success
) {
console
.
log
(
"
Document deleted successfully
"
);
}
Procedural Memory Methods
getProceduralMemory
Input
Output
id
?:
string
Promise
<
ActorStub
<
SmartProceduralMemory
>>
Example
Access procedural memory for templates and skills
// Get procedural memory interface
const
proceduralMemory
= await
memory
.
getProceduralMemory
();
// Store a reusable procedure
await
proceduralMemory
.
putProcedure
(
"
email_template
"
,
"
Subject: Welcome to our service
\n\n
Dear {name}, welcome aboard!
"
);
putProcedure
Input
Output
key: string
value: string
Promise
<
void
>
Example
Store reusable procedure or template
// Store a procedure template
await
proceduralMemory
.
putProcedure
(
"
code_review_checklist
"
,
`
1. Check for security vulnerabilities
2. Verify error handling
3. Review performance implications
4. Validate test coverage
`
);
getProcedure
Input
Output
key: string
Promise
<
string
|
null
>
Example
Retrieve stored procedure by key
// Get a specific procedure
const
checklist
= await
proceduralMemory
.
getProcedure
(
"
code_review_checklist
"
);
if
(checklist) {
console
.
log
(
"
Code review steps:
"
, checklist);
}
deleteProcedure
Input
Output
key: string
Promise
<
boolean
>
Example
Remove procedure from storage
// Delete a procedure
const
deleted
= await
proceduralMemory
.
deleteProcedure
(
"
old_template
"
);
if
(deleted) {
console
.
log
(
"
Procedure removed successfully
"
);
}
listProcedures
Input
Output
// No parameters required
Promise
<
ProcedureEntry[]
>
Example
Get all stored procedures
// List all available procedures
const
procedures
= await
proceduralMemory
.
listProcedures
();
procedures
.
forEach
(
proc
=>
{
console
.
log
(
`
${
proc
.
key
}
:
${
proc
.
value
.
substring
(
0
,
50
)
}
...
`
);
});
searchProcedures
Input
Output
query: ProceduralMemorySearchQuery
=
{
terms: string;
// required search terms
nMostRecent
?:
number;
// defaults to 'all'
searchKeys
?:
boolean;
// search keys (default: true)
searchValues
?:
boolean;
// search values (default: true)
}
Promise
<
ProcedureEntry[]
|
null
>
Example
Search stored procedures by text matching
// Search procedures for specific terms
const
results
= await
proceduralMemory
.
searchProcedures
(
{
terms:
"
review
"
,
nMostRecent:
5
}
);
if
(results) {
results
.
forEach
(
proc
=>
{
console
.
log
(
`
Found procedure:
${
proc
.
key
}
`
);
});
}
Previous
SmartBucket
Next
SmartSQL

SmartSQL
URL: https://docs.liquidmetal.ai/reference/smartsql/
SmartSQL
SmartSQL changes how you interact with databases. It runs regular SQL queries and converts plain English into SQL. It finds sensitive data automatically and tracks your database structure for better AI queries.
This component uses SQLite as the underlying database system. You can execute standard SQL queries or use natural language that gets translated by AI. The AI translation takes longer than direct SQL but makes database interactions more accessible.
SmartSQL automatically detects personally identifiable information (PII) in your data. It tracks database metadata to improve AI query translation over time. This makes it perfect for applications that need intelligent data access with privacy awareness.
Creating
Configure SmartSQL in your raindrop.manifest file:
application
"
demo-app
"
{
smartsql
"
ssql-demo
"
{}
}
Accessing
Access your SmartSQL database through environment bindings:
// Execute a SQL query
const
result
= await
env
.
SSQL_DEMO
.
executeQuery
(
{
sqlQuery:
"
SELECT * FROM users WHERE age > 21
"
}
);
Database Setup and Seeding
SmartSQL requires direct SQL queries for table creation and data seeding. Unlike traditional database migrations, you execute these queries directly through the
executeQuery
interface.
Creating Tables
Use CREATE IF NOT EXISTS statements to ensure idempotent table creation:
// Create users table with idempotent statement
await
env
.
SSQL_DEMO
.
executeQuery
({
sqlQuery:
`
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
email TEXT UNIQUE NOT NULL,
name TEXT NOT NULL,
age INTEGER,
status TEXT DEFAULT 'active',
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`
});
// Create products table
await
env
.
SSQL_DEMO
.
executeQuery
({
sqlQuery:
`
CREATE TABLE IF NOT EXISTS products (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
price DECIMAL(10, 2) NOT NULL,
category TEXT,
stock_quantity INTEGER DEFAULT 0,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`
});
Seeding Data
Use idempotent seeding patterns to avoid duplicate data:
// Seed initial users with conflict resolution
await
env
.
SSQL_DEMO
.
executeQuery
({
sqlQuery:
`
INSERT OR IGNORE INTO users (email, name, age, status)
VALUES
('admin@example.com', 'Admin User', 35, 'active'),
('john@example.com', 'John Doe', 28, 'active'),
('jane@example.com', 'Jane Smith', 32, 'active')
`
});
// Alternative: Use INSERT OR REPLACE for updates
await
env
.
SSQL_DEMO
.
executeQuery
({
sqlQuery:
`
INSERT OR REPLACE INTO products (id, name, price, category)
VALUES
(1, 'Laptop', 999.99, 'Electronics'),
(2, 'Coffee Maker', 79.99, 'Appliances'),
(3, 'Desk Chair', 249.99, 'Furniture')
`
});
SmartSQL uses SQLite syntax for all operations. Remember to use idempotent patterns (CREATE IF NOT EXISTS, INSERT OR IGNORE) to ensure your setup scripts can run multiple times safely.
Core Concepts
SmartSQL provides these main interfaces:
executeQuery
- Run SQL queries or natural language queries
getMetadata
- Retrieve database schema information
updateMetadata
- Update database schema metadata
getPiiData
- Get PII detection results for specific tables
QueryOptions
Configuration for database queries:
interface
QueryOptions {
textQuery
?:
string
;
// Natural language query (AI translated)
sqlQuery
?:
string
;
// Direct SQL query
format
?:
'
json
'
|
'
csv
'
;
// Response format
}
TableMetadata
Database schema information structure:
interface
TableMetadata {
tableName
:
string
;
// Name of the database table
columns
:
Array
<{
columnName
:
string
;
// Column identifier
dataType
:
string
;
// SQL data type
sampleData
?:
string
;
// Example value for AI context
nullable
:
boolean
;
// Whether column allows NULL
isPrimaryKey
:
boolean
;
// Primary key indicator
}>;
createdAt
?:
string
;
// Table creation timestamp
updatedAt
?:
string
;
// Last modification timestamp
}
PiiDetection
PII detection results for sensitive data:
interface
PiiDetection {
detectionId
:
string
;
// Unique detection identifier
tableName
:
string
;
// Source table name
recordId
:
string
;
// Specific record identifier
entities
:
Array
<{
entityType
:
string
;
// PII type (EMAIL, CREDITCARDNUMBER, etc.)
confidenceScore
:
number
;
// Detection confidence (0-1)
detectedText
:
string
;
// Actual sensitive text found
startPosition
:
number
;
// Text start position
endPosition
:
number
;
// Text end position
tokenIndex
:
number
;
// Token position in text
}>;
detectedAt
:
string
;
// Detection timestamp
}
executeQuery
Input
Output
{
textQuery
?:
string;
// "Find all users older than 25"
sqlQuery
?:
string;
// "SELECT * FROM users WHERE age > 25"
format
?:
'
json
'
|
'
csv
'
// Response format preference
}
{
message: string;
// Operation status message
results
?:
string;
// Query results data
status: number;
// HTTP-style status code
queryExecuted: string;
// Actual SQL query that ran
aiReasoning
?:
string;
// AI translation explanation
}
Example
Execute a natural language query to find active users:
const
result
= await
env
.
SSQL_DEMO
.
executeQuery
(
{
textQuery:
"
Show me all active users from the last month
"
,
format:
"
json
"
}
);
// AI translates to SQL and executes
console
.
log
(result
.
queryExecuted
);
// "SELECT * FROM users WHERE status = 'active' AND created_at > ..."
console
.
log
(result
.
results
);
// JSON string with user data
getMetadata
Input
Output
string
?
// Optional table name filter
{
tables:
Array
<{
tableName
:
string
;
columns
:
Array
<{
columnName
:
string
;
dataType
:
string
;
sampleData
?:
string
;
nullable
:
boolean
;
isPrimaryKey
:
boolean
;
}>;
createdAt
?:
string
;
updatedAt
?:
string
;
}>;
lastUpdated
?:
string;
}
Example
Retrieve schema information for the users table:
const
metadata
= await
env
.
SSQL_DEMO
.
getMetadata
(
"
users
"
);
// Returns complete schema information
console
.
log
(metadata
.
tables
[
0
]
.
columns
);
// Shows column names, types, and sample data for AI context
updateMetadata
Input
Output
{
tables:
Array
<{
tableName
:
string
;
columns
:
Array
<{
columnName
:
string
;
dataType
:
string
;
sampleData
?:
string
;
nullable
:
boolean
;
isPrimaryKey
:
boolean
;
}>;
}>;
mode
?:
'
replace
'
|
'
merge
'
|
'
append
'
// Default: 'replace'
}
{
success: boolean;
// Update operation success
tablesUpdated: number;
// Number of tables modified
message: string;
// Operation result message
}
Example
Update metadata for better AI query translation:
const
result
= await
env
.
SSQL_DEMO
.
updateMetadata
([{
tableName:
"
products
"
,
columns: [{
columnName:
"
price
"
,
dataType:
"
DECIMAL
"
,
sampleData:
"
29.99
"
,
// Helps AI understand price format
nullable:
false
,
isPrimaryKey:
false
}]
}]
,
"
merge
"
);
// Merges new metadata with existing information
console
.
log
(result
.
tablesUpdated
);
// 1
getPiiData
Input
Output
{
tableName: string;
// Target table to analyze
recordId
?:
string;
// Optional specific record filter
}
{
piiDetections:
Array
<{
detectionId
:
string
;
tableName
:
string
;
recordId
:
string
;
entities
:
Array
<{
entityType
:
string
;
confidenceScore
:
number
;
detectedText
:
string
;
startPosition
:
number
;
endPosition
:
number
;
tokenIndex
:
number
;
}>;
detectedAt
:
string
;
}>;
}
Example
Detect PII in customer data for compliance:
const
piiData
= await
env
.
SSQL_DEMO
.
getPiiData
(
"
customers
"
);
// Returns detected sensitive information
piiData
.
piiDetections
.
forEach
(
detection
=>
{
detection
.
entities
.
forEach
(
entity
=>
{
console
.
log
(
`
Found
${
entity
.
entityType
}
:
${
entity
.
detectedText
}
`
);
// Might show: "Found EMAIL: john@example.com"
});
});
Previous
SmartMemory
Next
SQL

SQL
URL: https://docs.liquidmetal.ai/reference/sql/
SQL
SQL provides persistent database storage with SQLite-compatible syntax. You can execute queries, prepare statements, and manage data with familiar SQL commands.
The SQL component supports prepared statements for secure parameter binding. You get automatic query optimization and protection against SQL injection attacks.
Database operations return detailed metadata including execution time, rows affected, and database size changes.
Creating
Configure SQL databases in your raindrop.manifest file:
application
"
demo-sql-app
"
{
sql_database
"
demosql
"
{}
service
"
demo-sql
"
{
visibility
=
"
public
"
}
}
Accessing
Access SQL databases through environment bindings in your service code:
export
default
{
async
fetch
(
request
:
Request
,
env
:
Env
)
{
// Access the configured SQL database
const
db
=
env
.
demosql
;
// Execute a simple query
const
result
= await
db
.
exec
(
"
SELECT 1 as test
"
);
return
new
Response
(
JSON
.
stringify
(result));
}
}
Core Concepts
Main interfaces for SQL operations:
SqlDatabase
- Primary database interface with prepare, batch, and exec methods
SqlPreparedStatement
- Prepared statement with bind, run, all, first, and raw methods
SqlResult
- Query results with data and metadata
SqlResponse
- Base response with success status and operation metadata
SqlExecResult
- Execution result for direct queries
SqlMeta
- Operation metadata with performance and change information
SqlResponse
Base response structure for successful SQL operations:
interface
SqlResponse {
// Indicates successful completion
success
:
true
;
// Metadata about the operation
meta
:
SqlMeta
&
Record
<
string
,
unknown
>;
// Error never present for successful operations
error
?:
never
;
}
SqlResult
Query results containing data and metadata:
type
SqlResult<
T
=
unknown
>
=
SqlResponse
&
{
// Array of query results
results
:
T
[];
};
SqlExecResult
Execution result for direct SQL statements:
interface
SqlExecResult {
// Number of statements executed
count
:
number
;
// Duration of execution in milliseconds
duration
:
number
;
}
SqlMeta
Operation metadata with performance information:
interface
SqlMeta {
// Duration of the operation in milliseconds
duration
:
number
;
// Size of the database after the operation in bytes
size_after
:
number
;
// Number of rows read during the operation
rows_read
:
number
;
// Number of rows written during the operation
rows_written
:
number
;
// ID of the last inserted row
last_row_id
:
number
;
// Whether the database was modified
changed_db
:
boolean
;
// Number of rows modified
changes
:
number
;
}
System Limits
Maximum database size: 10 GB
Rate limit: 1000 queries per service
SQL dialect: Subset of SQLite
prepare
Input
Output
// Prepare a SQL statement for execution
prepare
(query: string): SqlPreparedStatement
// Returns a prepared statement ready for execution
SqlPreparedStatement
Creates a prepared statement from a SQL query string.
// Prepare an INSERT statement with parameters
const
stmt
=
db
.
prepare
(
"
INSERT INTO users (name, email) VALUES (?, ?)
"
);
// Bind values and execute
const
result
= await
stmt
.
bind
(
"
Alice
"
,
"
alice@example.com
"
)
.
run
();
batch
Input
Output
// Execute multiple prepared statements in a batch
batch<
T
=
unknown
>
(
statements
:
SqlPreparedStatement
[]
)
:
Promise
<
SqlResult
<
T
>[]>
// Returns array of results for each statement
Promise
<
SqlResult
<
T
>
[]
>
Executes multiple prepared statements in a single batch operation.
// Prepare multiple statements
const
insertUser
=
db
.
prepare
(
"
INSERT INTO users (name) VALUES (?)
"
);
const
insertPost
=
db
.
prepare
(
"
INSERT INTO posts (title, user_id) VALUES (?, ?)
"
);
// Execute as batch
const
results
= await
db
.
batch
([
insertUser
.
bind
(
"
Bob
"
),
insertPost
.
bind
(
"
Hello World
"
,
1
)
]);
exec
Input
Output
// Execute a SQL query directly
exec
(query: string):
Promise
<
SqlExecResult
>
// Returns execution result with count and duration
Promise
<
SqlExecResult
>
Executes a SQL query directly without preparation.
// Create a table with direct execution
const
result
= await
db
.
exec
(
`
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
email TEXT UNIQUE
)
`
);
console
.
log
(
`
Executed
${
result
.
count
}
statements in
${
result
.
duration
}
ms
`
);
bind
Input
Output
// Bind values to the prepared statement
bind
(
...
values: unknown[]): SqlPreparedStatement
// Returns the prepared statement for chaining
SqlPreparedStatement
Binds parameter values to a prepared statement.
// Bind parameters to a prepared statement
const
stmt
=
db
.
prepare
(
"
SELECT * FROM users WHERE age > ? AND city = ?
"
);
const
boundStmt
=
stmt
.
bind
(
25
,
"
New York
"
);
// Execute the bound statement
const
results
= await
boundStmt
.
all
();
first
Input
Output
// Get the first result column by name
first<
T
=
unknown
>
(
colName
:
string
)
:
Promise
<
T
|
null
>
// Get the first result row
first
<
T
=
Record
<
string
,
unknown
>>
()
:
Promise
<
T
|
null
>
// Returns the column value or row, or null if no results
Promise
<
T
|
null
>
Gets the first result column by name or the first result row.
// Get first column value
const
count
= await
db
.
prepare
(
"
SELECT COUNT(*) as total FROM users
"
)
.
first
<
number
>
(
"
total
"
);
// Get first row
const
user
= await
db
.
prepare
(
"
SELECT * FROM users WHERE id = ?
"
)
.
bind
(
1
)
.
first
<
User
>
();
run
Input
Output
// Execute the statement and return results
run<
T
=
Record
<
string
,
unknown
>>
()
:
Promise
<
SqlResult
<
T
>>
// Returns query results with metadata
Promise
<
SqlResult
<
T
>>
Executes the prepared statement and returns results with metadata.
// Execute an INSERT statement
const
result
= await
db
.
prepare
(
"
INSERT INTO users (name) VALUES (?)
"
)
.
bind
(
"
Charlie
"
)
.
run
();
// Check execution metadata
console
.
log
(
`
Inserted row
${
result
.
meta
.
last_row_id
}
`
);
console
.
log
(
`
Database changed:
${
result
.
meta
.
changed_db
}
`
);
all
Input
Output
// Execute the statement and return all results
all<
T
=
Record
<
string
,
unknown
>>
()
:
Promise
<
SqlResult
<
T
>>
// Returns all query results with metadata
Promise
<
SqlResult
<
T
>>
Executes the prepared statement and returns all matching results.
// Get all users from the database
const
result
= await
db
.
prepare
(
"
SELECT * FROM users WHERE active = ?
"
)
.
bind
(
true
)
.
all
<
User
>();
// Access results array
for
(
const
user
of
result
.
results
) {
console
.
log
(
`
User:
${
user
.
name
}
`
);
}
raw
Input
Output
// Get raw results with optional column names
raw<
T
=
unknown
[]>
(
options
:
{ columnNames
:
true
}
)
:
Promise
<[
string
[],
...
T
[]]>
raw
<
T
=
unknown
[]>
(
options
?:
{ columnNames
?:
false
}
)
:
Promise
<
T
[]>
// Returns raw results array with or without column names
Promise
<
[string[],
...
T
[]]
>
|
Promise
<
T
[]
>
Gets raw query results as arrays with optional column names.
// Get raw results with column names
const
withColumns
= await
db
.
prepare
(
"
SELECT name, email FROM users
"
)
.
raw
({ columnNames:
true
});
const [
columns
,
...
rows
] =
withColumns;
// Get raw results without column names
const
rawRows
= await
db
.
prepare
(
"
SELECT name, email FROM users
"
)
.
raw
();
Previous
SmartSQL
Next
Task

Task
URL: https://docs.liquidmetal.ai/reference/task/
Task
Tasks enable scheduled background job execution in Raindrop applications. They use standard Unix cron expressions to define when code should run automatically.
Each Task executes at the times specified by its cron schedule. When a Task execution fails, there’s no automatic retry mechanism. The Task will run again at the next scheduled time. Tasks have a maximum execution time of 5 minutes (300,000ms CPU walltime).
Tasks provide a reliable way to run maintenance operations, data processing, or periodic updates without manual intervention.
Creating
Configure a Task in your
raindrop.manifest
file with a cron expression:
application
"demo-app"
{
task
"demo-task"
{
type
=
"
cron
"
cron
=
"
0 2 * * *
"
# Daily at 2 AM UTC
}
}
Accessing
Access your Task through environment bindings in your service code:
import
{ Task, Event }
from
'
raindrop
'
;
export
default
class
DemoTask
extends
Task
<
Env
> {
async
handle
(
event
:
Event
)
:
Promise
<
void
> {
// Task execution logic here
console
.
log
(
`
Task executed at
${
new
Date
(event
.
scheduledTime
)
}
`
);
}
}
Core Concepts
Main Interfaces
Task<Env>
- Abstract base class for processing scheduled events
Event
- Represents scheduled event data with timing information
Data Types
Event
interface
Event {
/** The value of the Cron Trigger that started the ScheduledEvent */
cron
:
string
;
/** The type of event. This will always return "scheduled" */
type
:
'
scheduled
'
;
/** The time the ScheduledEvent was scheduled to be executed in milliseconds since January 1, 1970, UTC */
scheduledTime
:
number
;
}
Task
abstract
class
Task
<
Env
> {
ctx
:
ExecutionContext
;
// Runtime execution context
env
:
Env
;
// Environment bindings
abstract
handle
(
event
:
Event
)
:
Promise
<
void
>;
// Required implementation method
}
System Limits
Maximum execution time: 300,000ms (5 minutes) CPU walltime
No automatic retry mechanism on failures
handle
Input
Output
event: Event
// Scheduled event information
Promise
<
void
>
// Async completion
Example
Process scheduled events with timing information:
export
default
class
BackupTask
extends
Task
<
Env
> {
async
handle
(
event
:
Event
)
:
Promise
<
void
> {
// Log execution details
const
executionTime
=
new
Date
(event
.
scheduledTime
);
console
.
log
(
`
Backup started at
${
executionTime
}
`
);
// Perform backup operations
await
this
.
performBackup
();
}
private
async
performBackup
()
:
Promise
<
void
> {
// Backup implementation
}
}
Previous
SQL
Next
Update Existing Application

Update Existing Application
URL: https://docs.liquidmetal.ai/reference/raindrop-mcp/update-application/
Update Existing Application
The update application workflow allows you to modify and enhance existing deployed applications while preserving all current functionality. Whether you’re adding new features, integrating AI capabilities, or expanding your data models, the workflow ensures safe, coordinated updates.
How Updates Work
Updates create a new development timeline while preserving your existing application and its deployment. The workflow guides you through updating requirements, architecture, and implementation while maintaining production stability.
Your involvement:
Describe what you want to change and approve the updated requirements. Everything else is automated.
Starting an Update
Using Shorthand Command:
/update-raindrop-app [session_id] [old_timeline_id]
Using Direct MCP Call:
Claude, call the liquidmetal-staging:update_app_step MCP tool with session_id "your-session-id" and old_timeline_id "your-timeline-id".
Finding Your Session IDs:
You can instruct Claude Code to look in your
.raindrop.config.local.json
file to find your session and timeline IDs.
Update Workflow
The update workflow follows the same automated phases as the new application workflow, but starts with updating your requirements and preserving existing functionality. You describe what you want to change, approve the updated PRD, and the system handles everything else while maintaining backward compatibility.
Common Update Scenarios
Adding AI Features
- Integrate language models, embeddings, or vector search capabilities
Database Expansion
- Add new tables, relationships, or data types while preserving existing data
API Enhancement
- Expand endpoints and functionality while maintaining backward compatibility
Integration Additions
- Connect to new external services without disrupting current workflows
Performance Optimization
- Enhance speed and efficiency while preserving all functionality
Security Enhancements
- Add authentication, authorization, or compliance features
Stay on Track
If Claude gets off track, simply guide him back to the correct MCP tool and automation will continue from where it left off.
The update workflow transforms application enhancement from a risky, complex process into a safe, guided experience that preserves existing value while adding new capabilities.
Previous
Task
Next
Vector

Vector Index
URL: https://docs.liquidmetal.ai/reference/vector/
Vector Index
Vector Index stores high-dimensional vector data for similarity search operations. You can use it for text embeddings, image features, audio fingerprints, or any numerical vectors that need fast similarity queries.
Vector Index supports various distance metrics and filtering capabilities. You can store metadata with each vector and perform filtered similarity searches. The component handles high-performance vector operations with automatic indexing.
For users building RAG solutions, consider using
SmartBuckets
which provide higher-level document processing and semantic search capabilities.
Creating
Define a vector index in your
raindrop.manifest
file with dimensions and distance metric:
application
"my-app"
{
vector_index
"embeddings"
{
dimensions
=
1024
metric
=
"
cosine
"
// or "euclidean", "dot-product"
}
}
Distance Metrics:
cosine
- Measures angle between vectors (ignores magnitude). Best for text embeddings and semantic similarity.
euclidean
- Straight-line distance in vector space. Good when magnitude matters (coordinates, measurements).
dot-product
- Combines angle and magnitude. Useful when vector length represents confidence or importance.
Accessing
Access your vector index through environment bindings in your service functions:
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
// Access the vector index
const
embeddings
=
env
.
EMBEDDINGS
;
// Perform similarity search
const
results
= await
embeddings
.
query
([
0.1
,
0.2
,
0.3
]);
return
new
Response
(
JSON
.
stringify
(results
.
matches
));
}
Core Concepts
Main Interfaces
VectorIndex
- Async operations for vector storage and querying
VectorIndexIndex
- Sync operations for index management
Core Data Types
VectorIndexVector
- Represents a single vector with metadata:
interface
VectorIndexVector {
id
:
string
;
// Unique identifier for the vector
values
:
number
[]
|
Float32Array
;
// Vector values as array
namespace
?:
string
;
// Optional namespace for organization
metadata
?:
Record
<
string
,
any
>;
// Optional metadata key-value pairs
}
VectorIndexMatch
- Search result with similarity score:
interface
VectorIndexMatch {
id
:
string
;
// Vector identifier
score
:
number
;
// Similarity score (higher = more similar)
values
?:
number
[];
// Vector values if returnValues is true
metadata
?:
Record
<
string
,
any
>;
// Metadata if returnMetadata is set
namespace
?:
string
;
// Vector namespace
}
VectorIndexQueryOptions
- Query configuration:
interface
VectorIndexQueryOptions {
topK
?:
number
;
// Number of results to return (default: 5, max: 100)
namespace
?:
string
;
// Filter by namespace
returnValues
?:
boolean
;
// Include vector values in results (default: false)
returnMetadata
?:
boolean
|
string
;
// Include metadata (default: 'none')
filter
?:
Record
<
string
,
any
>;
// Metadata filters for results
}
System Limits
Maximum 1536 dimensions per vector
Maximum 5M vectors per index
TopK maximum: 100 without metadata, 20 with metadata
Maximum 1000 vectors per batch operation
describe
describe
():
Promise
<
VectorIndexIndexInfo
>
Returns index statistics and configuration details.
Input
Output
// No parameters required
await
env
.
EMBEDDINGS
.
describe
();
{
vectorCount:
15420
,
// Total vectors in index
dimensions:
1024
,
// Vector dimensions
processedUpToDatetime:
1641234567890
,
// Last processing timestamp
processedUpToMutation:
98765
// Last processed mutation ID
}
Example
Get basic statistics about your vector index including total vector count and dimensions.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
// Get index statistics
const
info
= await
env
.
EMBEDDINGS
.
describe
();
return
new
Response
(
`
Index contains
${
info
.
vectorCount
}
vectors
`
);
}
query
query
(vector: number[]
|
Float32Array, options
?:
VectorIndexQueryOptions):
Promise
<
VectorIndexMatches
>
Finds vectors most similar to the input query vector.
Input
Output
const
queryVector
=
[
0.1
,
0.2
,
0.3
,
0.4
];
// Query vector
const
options
= {
topK:
10
,
// Return top 10 matches
returnMetadata:
true
,
// Include metadata
filter: { category:
'
product
'
}
// Filter by metadata
}
;
{
matches: [
{
id:
"
vec_123
"
,
score:
0.95
,
// Similarity score
metadata: { category:
"
product
"
, name:
"
Widget A
"
},
namespace:
"
products
"
}
// ... more matches
],
count:
10
// Number of matches returned
}
Example
Perform similarity search with a query vector and return the top 5 most similar vectors.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
const
queryVector
=
[
0.1
,
0.2
,
0.3
];
// Find similar vectors with metadata
const
results
= await
env
.
EMBEDDINGS
.
query
(queryVector
,
{
topK:
5
,
returnMetadata:
true
}
);
return
new
Response
(
JSON
.
stringify
(results
.
matches
));
}
queryById
queryById
(vectorId: string, options
?:
VectorIndexQueryOptions):
Promise
<
VectorIndexMatches
>
Finds vectors similar to an existing vector by its ID.
Input
Output
const
vectorId
=
"
vec_123
"
;
// ID of existing vector
const
options
= {
topK:
5
,
// Return top 5 similar vectors
returnValues:
false
,
// Don't return vector values
namespace:
"
products
"
// Search within namespace
}
;
{
matches: [
{
id:
"
vec_456
"
,
score:
0.89
,
metadata: { category:
"
similar_product
"
},
namespace:
"
products
"
}
// ... more matches
],
count:
5
}
Example
Find vectors similar to an existing vector using its ID instead of providing vector values.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
// Find vectors similar to an existing one
const
similar
= await
env
.
EMBEDDINGS
.
queryById
(
"
vec_123
"
,
{
topK:
3
,
returnMetadata:
true
}
);
return
new
Response
(
JSON
.
stringify
(similar
.
matches
));
}
insert
insert
(vectors: VectorIndexVector[]):
Promise
<
VectorIndexAsyncMutation
>
Adds new vectors to the index. Fails if vector IDs already exist.
Input
Output
const
vectors
=
[
{
id:
"
vec_001
"
,
values: [
0.1
,
0.2
,
0.3
],
namespace:
"
products
"
,
metadata: { category:
"
electronics
"
, price:
299
}
},
{
id:
"
vec_002
"
,
values: [
0.4
,
0.5
,
0.6
],
metadata: { category:
"
books
"
, author:
"
Smith
"
}
}
];
{
mutationId:
"
mut_abc123
"
// Async operation identifier
}
Example
Add new vectors to the index, operation will fail if any vector ID already exists.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
const
vectors
=
[
{
id:
"
product_001
"
,
values: [
0.1
,
0.2
,
0.3
]
,
metadata: { name:
"
Laptop
"
,
price:
999
}
}
];
// Insert new vectors
const
mutation
= await
env
.
EMBEDDINGS
.
insert
(vectors);
return
new
Response
(
`
Mutation ID:
${
mutation
.
mutationId
}
`
);
}
upsert
upsert
(vectors: VectorIndexVector[]):
Promise
<
VectorIndexAsyncMutation
>
Inserts new vectors or updates existing ones by ID.
Input
Output
const
vectors
=
[
{
id:
"
vec_001
"
,
// Will update if exists
values: [
0.2
,
0.3
,
0.4
],
// New vector values
metadata: { updated:
true
, version:
2
}
},
{
id:
"
vec_new
"
,
// Will insert as new
values: [
0.7
,
0.8
,
0.9
],
namespace:
"
latest
"
}
];
{
mutationId:
"
mut_def456
"
// Async operation identifier
}
Example
Insert new vectors or update existing ones, automatically handling both create and update operations.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
const
vectors
=
[
{
id:
"
product_001
"
,
values: [
0.2
,
0.3
,
0.4
]
,
metadata: { name:
"
Updated Laptop
"
,
price:
899
}
}
];
// Insert or update vectors
const
mutation
= await
env
.
EMBEDDINGS
.
upsert
(vectors);
return
new
Response
(
`
Upsert mutation:
${
mutation
.
mutationId
}
`
);
}
deleteByIds
deleteByIds
(ids: string[]):
Promise
<
VectorIndexAsyncMutation
>
Removes vectors from the index by their IDs.
Input
Output
const
vectorIds
=
[
"
vec_001
"
,
"
vec_002
"
,
"
vec_003
"
];
// IDs to delete
{
mutationId:
"
mut_ghi789
"
// Async operation identifier
}
Example
Remove multiple vectors from the index using their unique identifiers.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
const
idsToDelete
=
[
"
old_vec_1
"
,
"
old_vec_2
"
];
// Delete vectors by ID
const
mutation
= await
env
.
EMBEDDINGS
.
deleteByIds
(idsToDelete);
return
new
Response
(
`
Delete mutation:
${
mutation
.
mutationId
}
`
);
}
getByIds
getByIds
(ids: string[]):
Promise
<
VectorIndexVector[]
>
Retrieves specific vectors by their IDs with full data.
Input
Output
const
vectorIds
=
[
"
vec_001
"
,
"
vec_002
"
];
// IDs to retrieve
[
{
id:
"
vec_001
"
,
values: [
0.1
,
0.2
,
0.3
],
namespace:
"
products
"
,
metadata: { category:
"
electronics
"
}
},
{
id:
"
vec_002
"
,
values: [
0.4
,
0.5
,
0.6
],
metadata: { category:
"
books
"
}
}
]
Example
Retrieve complete vector data including values and metadata for specific vector IDs.
export
default
async
function
handler
(
req
:
Request
,
env
:
Env
)
{
const
targetIds
=
[
"
product_001
"
,
"
product_002
"
];
// Get specific vectors by ID
const
vectors
= await
env
.
EMBEDDINGS
.
getByIds
(targetIds);
return
new
Response
(
JSON
.
stringify
(vectors));
}
Previous
Update Existing Application
Next
Versioning

Versioning and Branching
URL: https://docs.liquidmetal.ai/reference/versioning/
Versioning and Branching
Raindrop’s branching and versioning capabilities help you manage development environments for your AI applications. These features allow teams to work independently by creating isolated environments for both compute resources and data.
Branching Basics
Every Raindrop project starts with a main branch, similar to a main branch in Git. From this main, you can create additional branches to isolate your development work. Each branch maintains its own copy of computing resources and data.
To create a new branch:
Terminal window
raindrop
build
branch
<branch-name>
Working with Sandboxes
Sandboxing provides a way to update an existing branch without creating a new one. By default newly created applications are set to sandboxing mode. Sandboxing is useful during development when you need to:
Test changes quickly
Iterate on a specific branch
Validate updates before committing them
To create a sandbox of your current branch:
Terminal window
raindrop
build
sandbox
For more precise control, you can sandbox a specific version:
Terminal window
raindrop
build
sandbox
<VERSION
ID>
To update your sandboxed deployment:
Terminal window
raindrop
build
deploy
--amend
Previous
Vector
Next
Overview

Raindrop SDK Overview
URL: https://docs.liquidmetal.ai/sdk/overview/
Raindrop SDK Overview
The Raindrop SDK provides official client libraries for integrating with the Raindrop API in your preferred programming language.
JavaScript/TypeScript
Python
Go
Java
- Documented in the GitHub repository.
Getting Started
Install the SDK for your language
Configure your API key - You can get a new API key from the
Raindrop Dashboard
Start making API calls
See the
Installation
and
Authentication
guides to get started.
Previous
Versioning
Next
Installation

Installation
URL: https://docs.liquidmetal.ai/sdk/installation/
Installation
Choose your preferred language to get started with the Raindrop SDK.
JavaScript/TypeScript
Terminal window
npm
install
@liquidmetal-ai/lm-raindrop
Python
Terminal window
pip
install
lm-raindrop
Go
Terminal window
go
get
-u
'
github.com/LiquidMetal-AI/lm-raindrop-go-sdk@v0.1.6
'
Java
Gradle
implementation
(
"
com.raindrop.api:raindrop-java:0.0.1-alpha.0
"
)
Maven
<
dependency
>
<
groupId
>
com.raindrop.api
</
groupId
>
<
artifactId
>
raindrop-java
</
artifactId
>
<
version
>
0.0.1-alpha.0
</
version
>
</
dependency
>
CLI
Terminal window
npm
install
-g
@liquidmetal-ai/raindrop
Previous
Overview
Next
Authentication

Authentication
URL: https://docs.liquidmetal.ai/sdk/authentication/
Authentication
The Raindrop SDK uses API keys for authentication. You can obtain an API key from the
Raindrop Dashboard
.
Configuring Your API Key
JavaScript/TypeScript
import
Raindrop
from
'
raindrop
'
;
import
process
from
'
process
'
;
// create a new raindrop client with your API key
async
function
main
()
{
const
client
=
new
Raindrop
(
{
apiKey:
process
.
env
[
'
RAINDROP_API_KEY
'
]
}
);
}
main
();
Python
from
raindrop
import
Raindrop
import
os
# create a new raindrop client with your API key
client
=
Raindrop
(
api_key
=
os.environ.
get
(
"
RAINDROP_API_KEY
"
)
)
Go
package
main
import
(
"
context
"
"
os
"
"
github.com/stainless-sdks/liquidmetal-ai-go
"
"
github.com/stainless-sdks/liquidmetal-ai-go/option
"
)
// create a new raindrop client with your API key
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
os
.
Getenv
(
"
RAINDROP_API_KEY
"
))
)
}
CLI
Run the following command in your terminal to authenticate your Raindrop CLI. This will open a browser window where you can complete the authentication process:
Terminal window
raindrop
auth
login
Previous
Installation
Next
SmartBucket

SmartBucket
URL: https://docs.liquidmetal.ai/sdk/examples/smartbucket/
SmartBucket
The query endpoints provide advanced AI-driven search, conversation, and summarization capabilities for documents and media stored in SmartBuckets.
It enables users and agents to interact naturally with content through conversational chat (DocumentChat), semantic search (RagSearch), and multi-modal queries across text, images, and audio (document_query). The service also supports intelligent summarization of search results (summarize_page) and paginated result navigation.
Designed for seamless integration into AI workflows, these endpoints make complex document exploration, PII detection, and knowledge extraction accessible via simple APIs, eliminating the need for custom pipelines or infrastructure.
POST
/v1/chunk_search
Chunk Search provides search capabilities that serve as a complete
drop-in replacement for traditional RAG pipelines. This system enables
AI agents to leverage private data stored in SmartBuckets with zero
additional configuration.
Each input query is processed by our AI agent to determine the best way to search the data.
The system will then return the most relevant results from the data ranked by relevance on the input query.
Schema Reference
Request
Response
Request Body
input
(
string
)
Required
Details
Description
Natural language query or question. Can include complex criteria and relationships. The system will optimize the search strategy based on this input
Example
Find documents about revenue in Q
4
2023
requestId
(
string
)
Required
Details
Description
Client-provided search session identifier. Required for pagination and result tracking. We recommend using a UUID or ULID for this value
Example
<YOUR-REQUEST-ID>
bucketLocations
(
array
)
Required
Details
Description
The buckets to search. If provided, the search will only return results from these buckets
Example
[
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
]
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
results
(
array
)
Details
Description
Ordered list of relevant text segments. Each result includes full context and metadata
Example
[
{
"chunkSignature"
:
"
chunk_123abc
"
,
"text"
:
"
Sample text
"
,
"score"
:
0.95
}
]
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
chunkSearch
(
{
bucketLocations:
[
{ bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
} },
]
,
input:
'
Find documents about revenue in Q4 2023
'
,
requestId:
'
<YOUR-REQUEST-ID>
'
,
}
);
console
.
log
(
response
.
results
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.
chunk_search
(
bucket_locations
=
[
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
],
input
=
"
Find documents about revenue in Q4 2023
"
,
request_id
=
"
<YOUR-REQUEST-ID>
"
,
)
print
(
response.results
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
ChunkSearch
(
context
.
TODO
(), raindrop.QueryChunkSearchParams{
BucketLocations
: []raindrop.BucketLocatorParam{raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}}},
Input
:
"
Find documents about revenue in Q4 2023
"
,
RequestID
:
"
<YOUR-REQUEST-ID>
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Results
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.QueryChunkSearchParams
;
import
com.raindrop.api.models.query.QueryChunkSearchResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
QueryChunkSearchParams
params
=
QueryChunkSearchParams
.
builder
()
.
addBucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
input
(
"
Find documents about revenue in Q4 2023
"
)
.
requestId
(
"
<YOUR-REQUEST-ID>
"
)
.
build
()
;
QueryChunkSearchResponse
response
=
client
.
query
()
.
chunkSearch
(
params
)
;
}
}
Terminal window
# Run a RAG search query
npx
raindrop
query
chunk-search
"
What is LiquidMetal?
"
-b
my-bucket
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/chunk_search
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"input": "Find documents about revenue in Q4 2023",
"request_id": "<YOUR-REQUEST-ID>",
"bucket_locations": [
{
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
}
]
}
'
Response Examples
200
{
"results"
: [
{
"chunkSignature"
:
"
chunk_123abc
"
,
"text"
:
"
Sample text
"
,
"score"
:
0.95
}
]
}
POST
/v1/document_query
Enables natural conversational interactions with documents stored in SmartBuckets. This endpoint allows users
to ask questions, request summaries, and explore document content through an intuitive conversational interface.
The system understands context and can handle complex queries about document contents.
The query system maintains conversation context throught the request_id, enabling follow-up questions and deep exploration
of document content. It works across all supported file types and automatically handles multi-page
documents, making complex file interaction as simple as having a conversation.
The system will:
Maintain conversation history for context when using the same request_id
Process questions against file content
Generate contextual, relevant responses
Document query is supported for all file types, including PDFs, images, and audio files.
Schema Reference
Request
Response
Request Body
bucketLocation
(
object
)
Required
Details
Description
The storage bucket containing the target document. Must be a valid, registered Smart Bucket. Used to identify which bucket to query against
Example
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
objectId
(
string
)
Required
Details
Description
Document identifier within the bucket. Typically matches the storage path or key. Used to identify which document to chat with
Example
document.pdf
input
(
string
)
Required
Details
Description
User’s input or question about the document. Can be natural language questions, commands, or requests. The system will process this against the document content
Example
What are the key points in this document?
requestId
(
string
)
Required
Details
Description
Client-provided conversation session identifier. Required for maintaining context in follow-up questions. We recommend using a UUID or ULID for this value
Example
<YOUR-REQUEST-ID>
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
answer
(
string
)
Details
Description
AI-generated response that may include direct document quotes, content summaries, contextual explanations, references to specific sections, and related content suggestions
Example
Based on the document, the key points are...
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
documentQuery
(
{
bucketLocation: {
bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
},
},
input:
'
What are the key points in this document?
'
,
objectId:
'
document.pdf
'
,
requestId:
'
<YOUR-REQUEST-ID>
'
,
}
);
console
.
log
(
response
.
answer
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.
document_query
(
bucket_location
=
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
,
input
=
"
What are the key points in this document?
"
,
object_id
=
"
document.pdf
"
,
request_id
=
"
<YOUR-REQUEST-ID>
"
,
)
print
(
response.answer
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
DocumentQuery
(
context
.
TODO
(), raindrop.QueryDocumentQueryParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
Input
:
"
What are the key points in this document?
"
,
ObjectID
:
"
document.pdf
"
,
RequestID
:
"
<YOUR-REQUEST-ID>
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Answer
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.QueryDocumentQueryParams
;
import
com.raindrop.api.models.query.QueryDocumentQueryResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
QueryDocumentQueryParams
params
=
QueryDocumentQueryParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
input
(
"
What are the key points in this document?
"
)
.
objectId
(
"
document.pdf
"
)
.
requestId
(
"
<YOUR-REQUEST-ID>
"
)
.
build
()
;
QueryDocumentQueryResponse
response
=
client
.
query
()
.
documentQuery
(
params
)
;
}
}
Terminal window
# Query a document in a bucket
npx
raindrop
query
document
"
What are the key points in this document?
"
\
-b
my-bucket
\
--object-id
document.pdf
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/document_query
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"bucket_location": {
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
},
"object_id": "document.pdf",
"input": "What are the key points in this document?",
"request_id": "<YOUR-REQUEST-ID>"
}
'
Response Examples
200
{
"answer"
:
"
Based on the document, the key points are...
"
}
POST
/v1/document_status
Get the indexing status of a document by its object key. This endpoint returns the current
indexing status of a document including progress through various processing stages.
Schema Reference
Request
Response
Request Body
bucketLocation
(
object
)
Required
Details
Description
The storage bucket containing the target document
Example
{
{
"bucket"
: {
{
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}}}}
objectId
(
string
)
Required
Details
Description
Document identifier within the bucket (object key)
Example
document.pdf
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
status
(
string
)
Details
Description
Overall document status
Example
processing
ingest
(
object
(nullable))
Details
Description
Ingest stage information
embedding
(
object
(nullable))
Details
Description
Embedding stage information
vectorIndex
(
object
(nullable))
Details
Description
Vector index stage information
pii
(
object
(nullable))
Details
Description
PII detection stage information
relationships
(
object
(nullable))
Details
Description
Relationships stage information
errors
(
array
)
Details
Description
Any errors encountered during indexing
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
documentStatus
.
getStatus
(
{
bucketLocation:
'
{{"bucket": {{"name": "my-smartbucket", "version": "01jxanr45haeswhay4n0q8340y", "application_name": "my-app"}}}}
'
,
objectId:
'
document.pdf
'
,
}
);
console
.
log
(
response
.
embedding
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.document_status.
get_status
(
bucket_location
=
"
{{
\"
bucket
\"
:
{{
\"
name
\"
:
\"
my-smartbucket
\"
,
\"
version
\"
:
\"
01jxanr45haeswhay4n0q8340y
\"
,
\"
application_name
\"
:
\"
my-app
\"
}}}}
"
,
object_id
=
"
document.pdf
"
,
)
print
(
response.embedding
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
DocumentStatus
.
GetStatus
(
context
.
TODO
(), raindrop.DocumentStatusGetStatusParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
ObjectID
:
"
document.pdf
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Embedding
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.documentstatus.DocumentStatusGetStatusParams
;
import
com.raindrop.api.models.documentstatus.DocumentStatusGetStatusResponse
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
DocumentStatusGetStatusParams
params
=
DocumentStatusGetStatusParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
"
{{
\"
bucket
\"
: {{
\"
name
\"
:
\"
my-smartbucket
\"
,
\"
version
\"
:
\"
01jxanr45haeswhay4n0q8340y
\"
,
\"
application_name
\"
:
\"
my-app
\"
}}}}
"
))
.
objectId
(
"
document.pdf
"
)
.
build
()
;
DocumentStatusGetStatusResponse
response
=
client
.
documentStatus
()
.
getStatus
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/document_status
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"bucket_location": "{{\"bucket\": {{\"name\": \"my-smartbucket\", \"version\": \"01jxanr45haeswhay4n0q8340y\", \"application_name\": \"my-app\"}}}}",
"object_id": "document.pdf"
}
'
Response Examples
200
{
"status"
:
"
processing
"
,
"ingest"
: {
"totalChunksCreated"
:
123
,
"chunksQueued"
:
123
,
"creationComplete"
:
true
},
"embedding"
: {
"totalExpected"
:
123
,
"itemsRemaining"
:
123
},
"vectorIndex"
: {
"totalExpected"
:
123
,
"itemsRemaining"
:
123
},
"pii"
: {
"totalExpected"
:
123
,
"itemsRemaining"
:
123
},
"relationships"
: {
"totalExpected"
:
123
,
"itemsRemaining"
:
123
},
"errors"
: [
"
example
"
]
}
POST
/v1/document_status_bulk
Get the indexing status for multiple documents in a single request. This is significantly more
efficient than making individual GetDocumentStatus calls, as it searches shards once and returns
status for all requested documents.
Schema Reference
Request
Response
Request Body
bucketLocation
(
object
)
Required
Details
Description
The storage bucket containing the target documents
Example
{
{
"bucket"
: {
{
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}}}}
objectIds
(
array
)
Required
Details
Description
List of document identifiers (object keys) to get status for
Example
[
"
document1.pdf
"
,
"
document2.pdf
"
,
"
document3.pdf
"
]
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
documents
(
array
)
Details
Description
Status information for each requested document, keyed by object_id
Example
[
{
"object_id"
:
"
doc1.pdf
"
,
"status"
:
"
completed
"
},
{
"object_id"
:
"
doc2.pdf
"
,
"status"
:
"
processing
"
}
]
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
documentStatusBulk
.
getStatusBulk
(
{
bucketLocation:
'
{{"bucket": {{"name": "my-smartbucket", "version": "01jxanr45haeswhay4n0q8340y", "application_name": "my-app"}}}}
'
,
objectIds:
[
'
document1.pdf
'
,
'
document2.pdf
'
,
'
document3.pdf
'
]
,
}
);
console
.
log
(
response
.
documents
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.document_status_bulk.
get_status_bulk
(
bucket_location
=
"
{{
\"
bucket
\"
:
{{
\"
name
\"
:
\"
my-smartbucket
\"
,
\"
version
\"
:
\"
01jxanr45haeswhay4n0q8340y
\"
,
\"
application_name
\"
:
\"
my-app
\"
}}}}
"
,
object_ids
=
[
"
document1.pdf
"
,
"
document2.pdf
"
,
"
document3.pdf
"
],
)
print
(
response.documents
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
DocumentStatusBulk
.
GetStatusBulk
(
context
.
TODO
(), raindrop.DocumentStatusBulkGetStatusBulkParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
ObjectIDs
: []
string
{
"
document1.pdf
"
,
"
document2.pdf
"
,
"
document3.pdf
"
},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Documents
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.documentstatusbulk.DocumentStatusBulkGetStatusBulkParams
;
import
com.raindrop.api.models.documentstatusbulk.DocumentStatusBulkGetStatusBulkResponse
;
import
java.util.List
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
DocumentStatusBulkGetStatusBulkParams
params
=
DocumentStatusBulkGetStatusBulkParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
"
{{
\"
bucket
\"
: {{
\"
name
\"
:
\"
my-smartbucket
\"
,
\"
version
\"
:
\"
01jxanr45haeswhay4n0q8340y
\"
,
\"
application_name
\"
:
\"
my-app
\"
}}}}
"
))
.
objectIds
(
List
.
of
(
"
document1.pdf
"
,
"
document2.pdf
"
,
"
document3.pdf
"
))
.
build
()
;
DocumentStatusBulkGetStatusBulkResponse
response
=
client
.
documentStatusBulk
()
.
getStatusBulk
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/document_status_bulk
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"bucket_location": "{{\"bucket\": {{\"name\": \"my-smartbucket\", \"version\": \"01jxanr45haeswhay4n0q8340y\", \"application_name\": \"my-app\"}}}}",
"object_ids": [
"document1.pdf",
"document2.pdf",
"document3.pdf"
]
}
'
Response Examples
200
{
"documents"
: [
{
"object_id"
:
"
doc1.pdf
"
,
"status"
:
"
completed
"
},
{
"object_id"
:
"
doc2.pdf
"
,
"status"
:
"
processing
"
}
]
}
POST
/v1/list_objects_by_status
List objects filtered by indexing status. Efficiently queries document storage across all shards
to find objects matching (or excluding) specified statuses. Useful for identifying objects that
need attention (e.g., failed, processing) or tracking indexing progress.
Schema Reference
Request
Response
Request Body
bucketLocation
(
object
)
Required
Details
Description
The storage bucket to query
Example
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
statuses
(
array
)
Required
Details
Description
Status values to filter by (e.g., “completed”, “failed”, “processing”, “ingesting”, “partial”, “uploading”, “not_found”)
Example
[
"
failed
"
,
"
processing
"
]
exclude
(
boolean
(nullable))
Details
Description
If true, returns objects NOT matching the specified statuses (inverts the filter)
Example
true
prefix
(
string
(nullable))
Details
Description
Optional prefix to filter object keys (e.g., “documents/” to only search in documents folder)
Example
documents/
partition
(
string
(nullable))
Details
Description
Partition to query (defaults to “default”)
Example
default
documents
(
array
)
Details
Description
Documents matching the status filter with their full status information
Example
[
{
"object_id"
:
"
doc1.pdf
"
,
"status"
:
"
failed
"
,
"errors"
: [
"
Embedding service timeout
"
]
},
{
"object_id"
:
"
doc2.pdf
"
,
"status"
:
"
processing
"
}
]
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
bucket
.
byStatus
.
listObjects
(
{
bucketLocation: {
bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
},
},
statuses:
[
'
failed
'
,
'
processing
'
]
,
}
);
console
.
log
(
response
.
documents
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.bucket.by_status.
list_objects
(
bucket_location
=
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
,
statuses
=
[
"
failed
"
,
"
processing
"
],
)
print
(
response.documents
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Bucket
.
ByStatus
.
ListObjects
(
context
.
TODO
(), raindrop.BucketByStatusListObjectsParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
Statuses
: []
string
{
"
failed
"
,
"
processing
"
},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Documents
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.bucket.bystatus.ByStatusListObjectsParams
;
import
com.raindrop.api.models.bucket.bystatus.ByStatusListObjectsResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
ByStatusListObjectsParams
params
=
ByStatusListObjectsParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
addStatus
(
"
failed
"
)
.
addStatus
(
"
processing
"
)
.
build
()
;
ByStatusListObjectsResponse
response
=
client
.
bucket
()
.
byStatus
()
.
listObjects
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/list_objects_by_status
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"bucket_location": {
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
},
"statuses": [
"failed",
"processing"
]
}
'
Response Examples
200
{
"documents"
: [
{
"object_id"
:
"
doc1.pdf
"
,
"status"
:
"
failed
"
,
"errors"
: [
"
Embedding service timeout
"
]
},
{
"object_id"
:
"
doc2.pdf
"
,
"status"
:
"
processing
"
}
]
}
POST
/v1/search
Primary search endpoint that provides advanced search capabilities across all document types stored in SmartBuckets.
Supports recursive object search within objects, enabling nested content search like embedded images, text content,
and personally identifiable information (PII).
The system supports complex queries like:
‘Show me documents containing credit card numbers or social security numbers’
‘Find images of landscapes taken during sunset’
‘Get documents mentioning revenue forecasts from Q4 2023’
‘Find me all PDF documents that contain pictures of a cat’
‘Find me all audio files that contain information about the weather in SF in 2024’
Key capabilities:
Natural language query understanding
Content-based search across text, images, and audio
Automatic PII detection
Multi-modal search (text, images, audio)
Schema Reference
Request
Response
Request Body
input
(
string
)
Required
Details
Description
Natural language search query that can include complex criteria. Supports queries like finding documents with specific content types, PII, or semantic meaning
Example
All my files
requestId
(
string
)
Required
Details
Description
Client-provided search session identifier. Required for pagination and result tracking. We recommend using a UUID or ULID for this value
Example
<YOUR-REQUEST-ID>
bucketLocations
(
array
)
Required
Details
Description
The buckets to search. If provided, the search will only return results from these buckets
Example
[
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
]
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
results
(
array
)
Details
Description
Matched results with metadata
Example
[
{
"chunkSignature"
:
"
35a494ab4de3ff1157b3cf23e5e94600e24a5552cbb6db645599547075a8c3ad
"
,
"text"
:
""
,
"source"
: {
"bucket"
: {
"moduleId"
:
"
01jxanr4xbf44jj3p62vwzh8j5
"
,
"bucketName"
:
"
my-smartbucket
"
,
"applicationVersionId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"applicationName"
:
"
my-app
"
},
"object"
:
"
my-file.pdf
"
}
}
]
pagination
(
object
)
Details
Description
Pagination details for result navigation
Example
{
"total"
:
100
,
"page"
:
1
,
"pageSize"
:
10
,
"totalPages"
:
10
}
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
search
(
{
bucketLocations:
[
{ bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
} },
]
,
input:
'
All my files
'
,
requestId:
'
<YOUR-REQUEST-ID>
'
,
}
);
console
.
log
(
response
.
pagination
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.
search
(
bucket_locations
=
[
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
],
input
=
"
All my files
"
,
request_id
=
"
<YOUR-REQUEST-ID>
"
,
)
print
(
response.pagination
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
Search
(
context
.
TODO
(), raindrop.QuerySearchParams{
BucketLocations
: []raindrop.BucketLocatorParam{raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}}},
Input
:
"
All my files
"
,
RequestID
:
"
<YOUR-REQUEST-ID>
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Pagination
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.QuerySearchParams
;
import
com.raindrop.api.models.query.QuerySearchResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
QuerySearchParams
params
=
QuerySearchParams
.
builder
()
.
addBucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
input
(
"
All my files
"
)
.
requestId
(
"
<YOUR-REQUEST-ID>
"
)
.
build
()
;
QuerySearchResponse
response
=
client
.
query
()
.
search
(
params
)
;
}
}
Terminal window
# Run a new search query
npx
raindrop
query
search
"
Find documents about revenue in Q4 2023
"
-b
customer-data
# Get paginated results using request ID
npx
raindrop
query
search
--requestId
01HNG4V2RJXS5T
--page
2
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/search
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"input": "All my files",
"request_id": "<YOUR-REQUEST-ID>",
"bucket_locations": [
{
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
}
]
}
'
Response Examples
200
{
"results"
: [
{
"chunkSignature"
:
"
35a494ab4de3ff1157b3cf23e5e94600e24a5552cbb6db645599547075a8c3ad
"
,
"text"
:
""
,
"source"
: {
"bucket"
: {
"moduleId"
:
"
01jxanr4xbf44jj3p62vwzh8j5
"
,
"bucketName"
:
"
my-smartbucket
"
,
"applicationVersionId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"applicationName"
:
"
my-app
"
},
"object"
:
"
my-file.pdf
"
}
}
],
"pagination"
: {
"total"
:
100
,
"page"
:
1
,
"pageSize"
:
10
,
"totalPages"
:
10
}
}
POST
/v1/search_get_page
Retrieve additional pages from a previous search. This endpoint enables
navigation through large result sets while maintaining search context and result relevance.
Retrieving paginated results requires a valid request_id from a previously completed search.
Schema Reference
Request
Response
Request Body
requestId
(
string
)
Required
Details
Description
Original search session identifier from the initial search
Example
<YOUR-REQUEST-ID>
page
(
integer
(nullable))
Required
Details
Description
Requested page number
Example
1
pageSize
(
integer
(nullable))
Required
Details
Description
Results per page
Example
10
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
results
(
array
)
Details
Description
Page results with full metadata
Example
[
{
"chunkSignature"
:
"
chunk_123abc
"
,
"text"
:
"
Sample text
"
,
"score"
:
0.95
}
]
pagination
(
object
)
Details
Description
Updated pagination information
Example
{
"total"
:
100
,
"page"
:
2
,
"pageSize"
:
10
,
"totalPages"
:
10
}
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
// Automatically fetches more pages as needed.
for
await
(
const
liquidmetalV1alpha1TextResult
of
client
.
query
.
getPaginatedSearch
({
page:
1
,
pageSize:
10
,
requestId:
'
<YOUR-REQUEST-ID>
'
,
})) {
console
.
log
(
liquidmetalV1alpha1TextResult
.
chunkSignature
);
}
from
raindrop
import
Raindrop
client
=
Raindrop
()
page
=
client.query.
get_paginated_search
(
page
=
1
,
page_size
=
10
,
request_id
=
"
<YOUR-REQUEST-ID>
"
,
)
page
=
page.results[
0
]
print
(
page.chunk_signature
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
page
,
err
:=
client
.
Query
.
GetPaginatedSearch
(
context
.
TODO
(), raindrop.QueryGetPaginatedSearchParams{
Page
:
raindrop
.
Int
(
1
),
PageSize
:
raindrop
.
Int
(
10
),
RequestID
:
"
<YOUR-REQUEST-ID>
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
page
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.models.query.QueryGetPaginatedSearchPage
;
import
com.raindrop.api.models.query.QueryGetPaginatedSearchParams
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
QueryGetPaginatedSearchParams
params
=
QueryGetPaginatedSearchParams
.
builder
()
.
page
(
1
)
.
pageSize
(
10
)
.
requestId
(
"
<YOUR-REQUEST-ID>
"
)
.
build
()
;
QueryGetPaginatedSearchPage
page
=
client
.
query
()
.
getPaginatedSearch
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/search_get_page
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"request_id": "<YOUR-REQUEST-ID>",
"page": 1,
"page_size": 10
}
'
Response Examples
200
{
"results"
: [
{
"chunkSignature"
:
"
chunk_123abc
"
,
"text"
:
"
Sample text
"
,
"score"
:
0.95
}
],
"pagination"
: {
"total"
:
100
,
"page"
:
2
,
"pageSize"
:
10
,
"totalPages"
:
10
}
}
POST
/v1/summarize_page
Generates intelligent summaries of search result pages, helping users
quickly understand large result sets without reading through every document. The system
analyzes the content of all results on a given page and generates a detailed overview.
The summary system:
Identifies key themes and topics
Extracts important findings
Highlights document relationships
Provides content type distribution
Summarizes metadata patterns
This is particularly valuable when dealing with:
Large document collections
Mixed content types
Technical documentation
Research materials
Schema Reference
Request
Response
Request Body
page
(
integer
)
Required
Details
Description
Target page number (1-based)
Example
1
pageSize
(
integer
)
Required
Details
Description
Results per page. Affects summary granularity
Example
10
requestId
(
string
)
Required
Details
Description
Original search session identifier from the initial search
Example
<YOUR-REQUEST-ID>
partition
(
string
(nullable))
Details
Description
Optional partition identifier for multi-tenant data isolation. Defaults to ‘default’ if not specified
Example
tenant
-123
summary
(
string
)
Details
Description
AI-generated summary including key themes and topics, content type distribution, important findings, and document relationships
Example
The search results contain information about...
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
sumarizePage
(
{ page:
1
, pageSize:
10
, requestId:
'
<YOUR-REQUEST-ID>
'
}
);
console
.
log
(
response
.
summary
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.
sumarize_page
(
page
=
1
,
page_size
=
10
,
request_id
=
"
<YOUR-REQUEST-ID>
"
,
)
print
(
response.summary
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
SumarizePage
(
context
.
TODO
(), raindrop.QuerySumarizePageParams{
Page
:
1
,
PageSize
:
10
,
RequestID
:
"
<YOUR-REQUEST-ID>
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Summary
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.models.query.QuerySumarizePageParams
;
import
com.raindrop.api.models.query.QuerySumarizePageResponse
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
QuerySumarizePageParams
params
=
QuerySumarizePageParams
.
builder
()
.
page
(
1
)
.
pageSize
(
10
)
.
requestId
(
"
<YOUR-REQUEST-ID>
"
)
.
build
()
;
QuerySumarizePageResponse
response
=
client
.
query
()
.
sumarizePage
(
params
)
;
}
}
Terminal window
# coming soon!
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/summarize_page
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"page": 1,
"page_size": 10,
"request_id": "<YOUR-REQUEST-ID>"
}
'
Response Examples
200
{
"summary"
:
"
The search results contain information about...
"
}
Previous
Authentication
Next
Object Operations

Object Storage
URL: https://docs.liquidmetal.ai/sdk/examples/object-storage/
Object Storage
The object storage endpoints handle operations on objects stored in buckets, providing core functionality
for managing files and data in SmartBuckets. This service enables direct interaction with stored
objects through simple CRUD operations.
POST
/v1/delete_object
Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is used to identify the bucket to delete from. The key is the path to the object in the bucket.
Schema Reference
Request
Response
Request Body
key
(
string
)
Required
Details
Description
Object key/path to delete
Example
my-key
bucketLocation
(
object
)
Required
Details
Description
The buckets to search. If provided, the search will only return results from these buckets
Example
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
bucket
= await
client
.
bucket
.
delete
(
{
bucketLocation: {
bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
},
},
key:
'
my-key
'
,
}
);
console
.
log
(
bucket
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
bucket
=
client.bucket.
delete
(
bucket_location
=
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
,
key
=
"
my-key
"
,
)
print
(
bucket
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
bucket
,
err
:=
client
.
Bucket
.
Delete
(
context
.
TODO
(), raindrop.BucketDeleteParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
Key
:
"
my-key
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
bucket
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.bucket.BucketDeleteParams
;
import
com.raindrop.api.models.bucket.BucketDeleteResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
BucketDeleteParams
params
=
BucketDeleteParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
key
(
"
my-key
"
)
.
build
()
;
BucketDeleteResponse
bucket
=
client
.
bucket
()
.
delete
(
params
)
;
}
}
Terminal window
raindrop
object
delete
dog1.pdf
--bucket
video-demos
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/delete_object
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"key": "my-key",
"bucket_location": {
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
}
}
'
Response Examples
200
{}
POST
/v1/get_object
Download a file from a SmartBucket or regular bucket. The bucket parameter (ID) is used to identify the bucket to download from. The key is the path to the object in the bucket.
Schema Reference
Request
Response
Request Body
key
(
string
)
Required
Details
Description
Object key/path to download
Example
my-key
bucketLocation
(
object
)
Required
Details
Description
The buckets to search. If provided, the search will only return results from these buckets
Example
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
content
(
string
)
Details
Description
No specific comments in original for these fields directly,
but they were part of the original GetObjectResponse.
contentType
(
string
)
Details
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
bucket
= await
client
.
bucket
.
get
(
{
bucketLocation: {
bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
},
},
key:
'
my-key
'
,
}
);
console
.
log
(
bucket
.
content
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
bucket
=
client.bucket.
get
(
bucket_location
=
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
,
key
=
"
my-key
"
,
)
print
(
bucket.content
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
bucket
,
err
:=
client
.
Bucket
.
Get
(
context
.
TODO
(), raindrop.BucketGetParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
Key
:
"
my-key
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
bucket
.
Content
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.bucket.BucketGetParams
;
import
com.raindrop.api.models.bucket.BucketGetResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
BucketGetParams
params
=
BucketGetParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
key
(
"
my-key
"
)
.
build
()
;
BucketGetResponse
bucket
=
client
.
bucket
()
.
get
(
params
)
;
}
}
Terminal window
# Download a file from a bucket
npx
raindrop
object
get
my-key
-b
my-bucket
# Download to specific output file
npx
raindrop
object
get
my-key
output.txt
-b
my-bucket
# Output to stdout
npx
raindrop
object
get
my-key
-b
my-bucket
--format
stdout
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/get_object
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"key": "my-key",
"bucket_location": {
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
}
}
'
Response Examples
200
{
"content"
:
"
example
"
,
"contentType"
:
"
example
"
}
POST
/v1/list_objects
List all objects in a SmartBucket or regular bucket. The bucket parameter (ID) is used to identify the bucket to list objects from.
Schema Reference
Request
Response
Request Body
bucketLocation
(
object
)
Required
Details
Description
The buckets to search. If provided, the search will only return results from these buckets
Example
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
prefix
(
string
(nullable))
Details
Description
Optional prefix to filter object keys (e.g., “documents/” to only list objects in documents folder)
Example
documents/
objects
(
array
)
Required
Details
Description
List of objects in the bucket with their metadata.
Example
[
{
"key"
:
"
08036c5a50a93da84c5c45ba468c58159d75281e.pdf
"
,
"size"
:
"
401107
"
,
"contentType"
:
"
application/pdf
"
,
"lastModified"
:
"
2025-05-05T18:36:43.029Z
"
},
{
"key"
:
"
0a29925ccc5e6299e132a73325956a3abef6dd26.pdf
"
,
"size"
:
"
57173
"
,
"contentType"
:
"
application/pdf
"
,
"lastModified"
:
"
2025-05-05T18:36:43.985Z
"
},
{
"key"
:
"
0e21835a42a6df2405496f62647058ff855743c1.pdf
"
,
"size"
:
"
1223197
"
,
"contentType"
:
"
application/pdf
"
,
"lastModified"
:
"
2025-05-05T18:36:45.362Z
"
}
]
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
buckets
= await
client
.
bucket
.
list
(
{
bucketLocation: {
bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
},
},
}
);
console
.
log
(
buckets
.
objects
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
buckets
=
client.bucket.
list
(
bucket_location
=
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
,
)
print
(
buckets.objects
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
buckets
,
err
:=
client
.
Bucket
.
List
(
context
.
TODO
(), raindrop.BucketListParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
buckets
.
Objects
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.bucket.BucketListParams
;
import
com.raindrop.api.models.bucket.BucketListResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
BucketListParams
params
=
BucketListParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
build
()
;
BucketListResponse
buckets
=
client
.
bucket
()
.
list
(
params
)
;
}
}
Terminal window
# List all objects in a bucket
npx
raindrop
object
list
-b
my-bucket
# List objects in JSON format
npx
raindrop
object
list
-b
my-bucket
--output
json
# List objects in table format
npx
raindrop
object
list
-b
my-bucket
--output
table
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/list_objects
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"bucket_location": {
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
}
}
'
Response Examples
200
{
"objects"
: [
{
"key"
:
"
08036c5a50a93da84c5c45ba468c58159d75281e.pdf
"
,
"size"
:
"
401107
"
,
"contentType"
:
"
application/pdf
"
,
"lastModified"
:
"
2025-05-05T18:36:43.029Z
"
},
{
"key"
:
"
0a29925ccc5e6299e132a73325956a3abef6dd26.pdf
"
,
"size"
:
"
57173
"
,
"contentType"
:
"
application/pdf
"
,
"lastModified"
:
"
2025-05-05T18:36:43.985Z
"
},
{
"key"
:
"
0e21835a42a6df2405496f62647058ff855743c1.pdf
"
,
"size"
:
"
1223197
"
,
"contentType"
:
"
application/pdf
"
,
"lastModified"
:
"
2025-05-05T18:36:45.362Z
"
}
]
}
POST
/v1/put_object
Upload a file to a SmartBucket or regular bucket. The bucket parameter (ID) is used to identify the bucket to upload to. The key is the path to the object in the bucket.
Schema Reference
Request
Response
Request Body
key
(
string
)
Required
Details
Description
Object key/path in the bucket
Example
my-key
content
(
string
)
Required
Details
Description
Binary content of the object
contentType
(
string
)
Required
Details
Description
MIME type of the object
Example
application/pdf
bucketLocation
(
object
)
Required
Details
Description
The buckets to search. If provided, the search will only return results from these buckets
Example
{
"bucket"
: {
"name"
:
"
my-smartbucket
"
,
"version"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"application_name"
:
"
my-app
"
}
}
bucket
(
object
)
Details
Description
Information about the bucket where the object was uploaded
Example
{
"moduleId"
:
"
01jt3vs2nyt2xwk2f54x2bkn84
"
}
key
(
string
)
Details
Description
Key/path of the uploaded object
Example
test-object.txt
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
bucket
.
put
(
{
bucketLocation: {
bucket: { name:
'
my-smartbucket
'
, version:
'
01jxanr45haeswhay4n0q8340y
'
, application_name:
'
my-app
'
},
},
content:
'
U3RhaW5sZXNzIHJvY2tz
'
,
contentType:
'
application/pdf
'
,
key:
'
my-key
'
,
}
);
console
.
log
(
response
.
bucket
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.bucket.
put
(
bucket_location
=
{
"
bucket
"
: {
"
name
"
:
"
my-smartbucket
"
,
"
version
"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
:
"
my-app
"
,
}
}
,
content
=
"
U3RhaW5sZXNzIHJvY2tz
"
,
content_type
=
"
application/pdf
"
,
key
=
"
my-key
"
,
)
print
(
response.bucket
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Bucket
.
Put
(
context
.
TODO
(), raindrop.BucketPutParams{
BucketLocation
: raindrop.BucketLocatorParam{
Bucket
: raindrop.LiquidmetalV1alpha1BucketNameParam{
ApplicationName
:
"
my-app
"
,
Name
:
"
my-bucket
"
,
Version
:
"
01jtryx2f2f61ryk06vd8mr91p
"
}},
Content
:
"
U3RhaW5sZXNzIHJvY2tz
"
,
ContentType
:
"
application/pdf
"
,
Key
:
"
my-key
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Bucket
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.bucket.BucketPutParams
;
import
com.raindrop.api.models.bucket.BucketPutResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
BucketPutParams
params
=
BucketPutParams
.
builder
()
.
bucketLocation
(
JsonValue
.
from
(
Map
.
of
(
"
bucket
"
,
Map
.
of
(
"
name
"
,
"
my-smartbucket
"
,
"
version
"
,
"
01jxanr45haeswhay4n0q8340y
"
,
"
application_name
"
,
"
my-app
"
)
)))
.
content
(
"
U3RhaW5sZXNzIHJvY2tz
"
)
.
contentType
(
"
application/pdf
"
)
.
key
(
"
my-key
"
)
.
build
()
;
BucketPutResponse
response
=
client
.
bucket
()
.
put
(
params
)
;
}
}
Terminal window
# Upload a file to a bucket
npx
raindrop
object
put
./myfile.txt
my-key
-b
my-bucket
# Upload with specific content type
npx
raindrop
object
put
./myfile.json
my-key
-b
my-bucket
--content-type
application/json
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/put_object
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"key": "my-key",
"content": "example",
"content_type": "application/pdf",
"bucket_location": {
"bucket": {
"name": "my-smartbucket",
"version": "01jxanr45haeswhay4n0q8340y",
"application_name": "my-app"
}
}
}
'
Response Examples
200
{
"bucket"
: {
"moduleId"
:
"
01jt3vs2nyt2xwk2f54x2bkn84
"
},
"key"
:
"
test-object.txt
"
}
Previous
SmartBucket
Next
SmartMemory

Smart Memory
URL: https://docs.liquidmetal.ai/sdk/examples/smart-memory/
Smart Memory
The Smart Memory service provides comprehensive memory management capabilities for AI agents.
It enables agents to store, retrieve, search, and manage memories in a timeline-based system
with working-, semantic-, episodic-, procedural-, memory storage capabilities.
The service supports semantic search, temporal queries, and intelligent summarization.
POST
/v1/delete_memory
Removes a specific memory entry from storage. This operation is permanent
and cannot be undone.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Unique session identifier for the working memory instance
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
memoryId
(
string
)
Required
Details
Description
Unique identifier of the memory entry to delete
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
success
(
boolean
)
Details
Description
Indicates whether the deletion was successful
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
deleteMemory
= await
client
.
deleteMemory
.
create
(
{
memoryId:
'
01jxanr45haeswhay4n0q8340y
'
,
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
deleteMemory
.
success
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
delete_memory
=
client.delete_memory.
create
(
memory_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
delete_memory.success
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
deleteMemory
,
err
:=
client
.
DeleteMemory
.
New
(
context
.
TODO
(), raindrop.DeleteMemoryNewParams{
MemoryID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.DeleteMemoryNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
deleteMemory
.
Success
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.deletememory.DeleteMemoryCreateParams
;
import
com.raindrop.api.models.deletememory.DeleteMemoryCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
DeleteMemoryCreateParams
params
=
DeleteMemoryCreateParams
.
builder
()
.
memoryId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
DeleteMemoryCreateResponse
deleteMemory
=
client
.
deleteMemory
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/delete_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y",
"memory_id": "01jxanr45haeswhay4n0q8340y"
}
'
Response Examples
200
{
"success"
:
true
}
POST
/v1/delete_procedure
Removes a specific procedure from procedural memory.
This operation is permanent and affects all future sessions.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
key
(
string
)
Required
Details
Description
Unique key of the procedure to delete
Example
TechnicalReportSystemPrompt
proceduralMemoryId
(
string
(nullable))
Details
Description
Optional procedural memory ID to use for actor isolation
Example
demo-smartmemory
success
(
boolean
)
Details
Description
Indicates whether the procedure was deleted successfully
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
deleteProcedure
= await
client
.
deleteProcedure
.
create
(
{
key:
'
TechnicalReportSystemPrompt
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
deleteProcedure
.
success
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
delete_procedure
=
client.delete_procedure.
create
(
key
=
"
TechnicalReportSystemPrompt
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
delete_procedure.success
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
deleteProcedure
,
err
:=
client
.
DeleteProcedure
.
New
(
context
.
TODO
(), raindrop.DeleteProcedureNewParams{
Key
:
"
TechnicalReportSystemPrompt
"
,
SmartMemoryLocation
: raindrop.DeleteProcedureNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
deleteProcedure
.
Success
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.deleteprocedure.DeleteProcedureCreateParams
;
import
com.raindrop.api.models.deleteprocedure.DeleteProcedureCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
DeleteProcedureCreateParams
params
=
DeleteProcedureCreateParams
.
builder
()
.
key
(
"
TechnicalReportSystemPrompt
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
DeleteProcedureCreateResponse
deleteProcedure
=
client
.
deleteProcedure
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/delete_procedure
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"key": "TechnicalReportSystemPrompt"
}
'
Response Examples
200
{
"success"
:
true
}
POST
/v1/delete_semantic_memory
Removes a specific semantic memory document by its object ID.
This operation permanently deletes the document and is irreversible.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
objectId
(
string
)
Required
Details
Description
Unique object identifier of the document to delete
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
success
(
boolean
)
Details
Description
Indicates whether the document was deleted successfully
error
(
string
(nullable))
Details
Description
Error message if the operation failed
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
deleteSemanticMemory
= await
client
.
deleteSemanticMemory
.
delete
(
{
objectId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
deleteSemanticMemory
.
error
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
delete_semantic_memory
=
client.delete_semantic_memory.
delete
(
object_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
delete_semantic_memory.error
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
deleteSemanticMemory
,
err
:=
client
.
DeleteSemanticMemory
.
Delete
(
context
.
TODO
(), raindrop.DeleteSemanticMemoryDeleteParams{
ObjectID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.DeleteSemanticMemoryDeleteParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
deleteSemanticMemory
.
Error
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.deletesemanticmemory.DeleteSemanticMemoryDeleteParams
;
import
com.raindrop.api.models.deletesemanticmemory.DeleteSemanticMemoryDeleteResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
DeleteSemanticMemoryDeleteParams
params
=
DeleteSemanticMemoryDeleteParams
.
builder
()
.
objectId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
DeleteSemanticMemoryDeleteResponse
deleteSemanticMemory
=
client
.
deleteSemanticMemory
()
.
delete
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/delete_semantic_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"object_id": "01jxanr45haeswhay4n0q8340y"
}
'
Response Examples
200
{
"success"
:
true
,
"error"
:
"
example
"
}
POST
/v1/end_session
Ends a working memory session, optionally flushing working memory to long-term storage.
When flush is enabled, important memories are processed and stored for future retrieval.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Unique session identifier to end
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
flush
(
boolean
(nullable))
Details
Description
Whether to flush working memory to long-term storage
Example
true
systemPrompt
(
string
(nullable))
Details
Description
Optional custom system prompt for memory summarization during flush
Example
Summarize the key decisions and action items from this session
success
(
boolean
)
Details
Description
Indicates whether the session was ended successfully
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
endSession
= await
client
.
endSession
.
create
(
{
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
endSession
.
success
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
end_session
=
client.end_session.
create
(
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
end_session.success
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
endSession
,
err
:=
client
.
EndSession
.
New
(
context
.
TODO
(), raindrop.EndSessionNewParams{
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.EndSessionNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
endSession
.
Success
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.endsession.EndSessionCreateParams
;
import
com.raindrop.api.models.endsession.EndSessionCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
EndSessionCreateParams
params
=
EndSessionCreateParams
.
builder
()
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
EndSessionCreateResponse
endSession
=
client
.
endSession
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/end_session
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y"
}
'
Response Examples
200
{
"success"
:
true
}
POST
/v1/get_memory
Retrieves memories based on timeline, key, or temporal criteria. Supports filtering
by specific timelines, time ranges, and limiting results to the most recent entries.
Query capabilities:
Timeline-specific retrieval
Key-based lookup
Temporal range queries
Most recent N entries
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Unique session identifier for the working memory instance
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
timeline
(
string
(nullable))
Details
Description
Timeline to filter memories
Example
user-conversation
-2024
key
(
string
(nullable))
Details
Description
Specific key to retrieve
Example
user-preference-theme
nMostRecent
(
integer
(nullable))
Details
Description
Maximum number of most recent memories to return
Example
10
startTime
(
object
(nullable))
Details
Description
Start time for temporal filtering
endTime
(
object
(nullable))
Details
Description
End time for temporal filtering
memories
(
array
)
Details
Description
List of matching memory entries
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
getMemory
= await
client
.
getMemory
.
retrieve
(
{
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
getMemory
.
memories
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
get_memory
=
client.get_memory.
retrieve
(
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
get_memory.memories
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
getMemory
,
err
:=
client
.
GetMemory
.
Get
(
context
.
TODO
(), raindrop.GetMemoryGetParams{
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.GetMemoryGetParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
getMemory
.
Memories
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.getmemory.GetMemoryRetrieveParams
;
import
com.raindrop.api.models.getmemory.GetMemoryRetrieveResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
GetMemoryRetrieveParams
params
=
GetMemoryRetrieveParams
.
builder
()
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
GetMemoryRetrieveResponse
getMemory
=
client
.
getMemory
()
.
retrieve
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/get_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y"
}
'
Response Examples
200
{
"memories"
: [
{
"id"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"sessionId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"timeline"
:
"
user-conversation-2024
"
,
"by"
:
"
assistant-v1
"
,
"dueTo"
:
"
user-input
"
,
"content"
:
"
User prefers dark theme for the interface
"
,
"at"
:
"
2025-05-05T18:36:43.029Z
"
,
"key"
:
"
user-preference-theme
"
,
"agent"
:
"
assistant-v1
"
}
]
}
POST
/v1/get_procedure
Retrieves a specific procedure by key from procedural memory.
Procedures are persistent knowledge artifacts that remain available
across all sessions and can be shared between different agent instances.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
key
(
string
)
Required
Details
Description
Unique key of the procedure to retrieve
Example
TechnicalReportSystemPrompt
proceduralMemoryId
(
string
(nullable))
Details
Description
Optional procedural memory ID to use for actor isolation
Example
demo-smartmemory
value
(
string
(nullable))
Details
Description
The procedure content, or empty if not found
Example
You are a technical documentation assistant...
found
(
boolean
)
Details
Description
Indicates whether the procedure was found
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
getProcedure
= await
client
.
getProcedure
.
create
(
{
key:
'
TechnicalReportSystemPrompt
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
getProcedure
.
found
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
get_procedure
=
client.get_procedure.
create
(
key
=
"
TechnicalReportSystemPrompt
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
get_procedure.found
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
getProcedure
,
err
:=
client
.
GetProcedure
.
New
(
context
.
TODO
(), raindrop.GetProcedureNewParams{
Key
:
"
TechnicalReportSystemPrompt
"
,
SmartMemoryLocation
: raindrop.GetProcedureNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
getProcedure
.
Found
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.getprocedure.GetProcedureCreateParams
;
import
com.raindrop.api.models.getprocedure.GetProcedureCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
GetProcedureCreateParams
params
=
GetProcedureCreateParams
.
builder
()
.
key
(
"
TechnicalReportSystemPrompt
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
GetProcedureCreateResponse
getProcedure
=
client
.
getProcedure
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/get_procedure
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"key": "TechnicalReportSystemPrompt"
}
'
Response Examples
200
{
"value"
:
"
You are a technical documentation assistant...
"
,
"found"
:
true
}
POST
/v1/get_semantic_memory
Retrieves a specific semantic memory document by its object ID.
Returns the complete document with all its stored properties and metadata.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
objectId
(
string
)
Required
Details
Description
Unique object identifier of the document to retrieve
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
success
(
boolean
)
Details
Description
Indicates whether the document was retrieved successfully
document
(
string
(nullable))
Details
Description
JSON-encoded document content if found
Example
{
"title"
:
"
AI Best Practices
"
,
"content"
:
"
...
"
,
"category"
:
"
development
"
}
error
(
string
(nullable))
Details
Description
Error message if the operation failed
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
getSemanticMemory
= await
client
.
getSemanticMemory
.
create
(
{
objectId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
getSemanticMemory
.
document
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
get_semantic_memory
=
client.get_semantic_memory.
create
(
object_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
get_semantic_memory.document
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
getSemanticMemory
,
err
:=
client
.
GetSemanticMemory
.
New
(
context
.
TODO
(), raindrop.GetSemanticMemoryNewParams{
ObjectID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.GetSemanticMemoryNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
getSemanticMemory
.
Document
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.getsemanticmemory.GetSemanticMemoryCreateParams
;
import
com.raindrop.api.models.getsemanticmemory.GetSemanticMemoryCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
GetSemanticMemoryCreateParams
params
=
GetSemanticMemoryCreateParams
.
builder
()
.
objectId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
GetSemanticMemoryCreateResponse
getSemanticMemory
=
client
.
getSemanticMemory
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/get_semantic_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"object_id": "01jxanr45haeswhay4n0q8340y"
}
'
Response Examples
200
{
"success"
:
true
,
"document"
: {
"title"
:
"
AI Best Practices
"
,
"content"
:
"
...
"
,
"category"
:
"
development
"
},
"error"
:
"
example
"
}
POST
/v1/list_procedures
Lists all procedures stored in procedural memory.
Returns metadata about each procedure including creation and modification times.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
proceduralMemoryId
(
string
(nullable))
Details
Description
Optional procedural memory ID to use for actor isolation
Example
demo-smartmemory
procedures
(
array
)
Details
Description
List of all stored procedures
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
listProcedure
= await
client
.
listProcedures
.
create
(
{
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
listProcedure
.
procedures
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
list_procedure
=
client.list_procedures.
create
(
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
list_procedure.procedures
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
listProcedure
,
err
:=
client
.
ListProcedures
.
New
(
context
.
TODO
(), raindrop.ListProcedureNewParams{
SmartMemoryLocation
: raindrop.ListProcedureNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
listProcedure
.
Procedures
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.listprocedures.ListProcedureCreateParams
;
import
com.raindrop.api.models.listprocedures.ListProcedureCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
ListProcedureCreateParams
params
=
ListProcedureCreateParams
.
builder
()
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
ListProcedureCreateResponse
listProcedure
=
client
.
listProcedures
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/list_procedures
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
}
}
'
Response Examples
200
{
"procedures"
: [
{
"key"
:
"
TechnicalReportSystemPrompt
"
,
"value"
:
"
You are a technical documentation assistant...
"
,
"createdAt"
:
"
2025-05-05T18:36:43.029Z
"
,
"updatedAt"
:
"
2025-05-05T18:36:43.029Z
"
}
]
}
POST
/v1/put_memory
Stores a new memory entry in the agent’s working memory. Memories are organized by timeline
and can include contextual information like the agent responsible and triggering events.
The system will:
Store the memory with automatic timestamping
Generate embeddings for semantic search
Associate the memory with the specified timeline
Enable future retrieval and search operations
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Unique session identifier for the working memory instance
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
timeline
(
string
(nullable))
Details
Description
Timeline identifier for organizing related memories
Example
user-conversation
-2024
key
(
string
(nullable))
Details
Description
Optional key for direct memory retrieval
Example
user-preference-theme
content
(
string
)
Required
Details
Description
The actual memory content to store
Example
User prefers dark theme for the interface
agent
(
string
(nullable))
Details
Description
Agent identifier responsible for this memory
Example
assistant-v
1
memoryId
(
string
)
Details
Description
Unique identifier for the stored memory entry
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
putMemory
= await
client
.
putMemory
.
create
(
{
content:
'
User prefers dark theme for the interface
'
,
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
putMemory
.
memoryId
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
put_memory
=
client.put_memory.
create
(
content
=
"
User prefers dark theme for the interface
"
,
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
put_memory.memory_id
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
putMemory
,
err
:=
client
.
PutMemory
.
New
(
context
.
TODO
(), raindrop.PutMemoryNewParams{
Content
:
"
User prefers dark theme for the interface
"
,
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.PutMemoryNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
putMemory
.
MemoryID
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.putmemory.PutMemoryCreateParams
;
import
com.raindrop.api.models.putmemory.PutMemoryCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
PutMemoryCreateParams
params
=
PutMemoryCreateParams
.
builder
()
.
content
(
"
User prefers dark theme for the interface
"
)
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
PutMemoryCreateResponse
putMemory
=
client
.
putMemory
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/put_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y",
"content": "User prefers dark theme for the interface"
}
'
Response Examples
200
{
"memoryId"
:
"
01jxanr45haeswhay4n0q8340y
"
}
POST
/v1/put_procedure
Stores a new procedure in the agent’s procedural memory. Procedures are reusable
knowledge artifacts like system prompts, templates, workflows, or instructions
that can be retrieved and applied across different sessions and contexts.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
key
(
string
)
Required
Details
Description
Unique key to identify this procedure
Example
TechnicalReportSystemPrompt
value
(
string
)
Required
Details
Description
The procedure content (prompt, template, instructions, etc.)
Example
You are a technical documentation assistant...
proceduralMemoryId
(
string
(nullable))
Details
Description
Optional procedural memory ID to use for actor isolation
Example
demo-smartmemory
success
(
boolean
)
Details
Description
Indicates whether the procedure was stored successfully
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
putProcedure
= await
client
.
putProcedure
.
create
(
{
key:
'
TechnicalReportSystemPrompt
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
value:
'
You are a technical documentation assistant...
'
,
}
);
console
.
log
(
putProcedure
.
success
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
put_procedure
=
client.put_procedure.
create
(
key
=
"
TechnicalReportSystemPrompt
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
value
=
"
You are a technical documentation assistant...
"
,
)
print
(
put_procedure.success
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
putProcedure
,
err
:=
client
.
PutProcedure
.
New
(
context
.
TODO
(), raindrop.PutProcedureNewParams{
Key
:
"
TechnicalReportSystemPrompt
"
,
SmartMemoryLocation
: raindrop.PutProcedureNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
Value
:
"
You are a technical documentation assistant...
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
putProcedure
.
Success
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.putprocedure.PutProcedureCreateParams
;
import
com.raindrop.api.models.putprocedure.PutProcedureCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
PutProcedureCreateParams
params
=
PutProcedureCreateParams
.
builder
()
.
key
(
"
TechnicalReportSystemPrompt
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
value
(
"
You are a technical documentation assistant...
"
)
.
build
()
;
PutProcedureCreateResponse
putProcedure
=
client
.
putProcedure
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/put_procedure
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"key": "TechnicalReportSystemPrompt",
"value": "You are a technical documentation assistant..."
}
'
Response Examples
200
{
"success"
:
true
}
POST
/v1/put_semantic_memory
Stores a semantic memory document for long-term knowledge retrieval.
Semantic memory is used for storing structured knowledge, facts, and information
that can be searched and retrieved across different sessions.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
document
(
string
)
Required
Details
Description
JSON-encoded document content to store in semantic memory
Example
{
"title"
:
"
AI Best Practices
"
,
"content"
:
"
...
"
,
"category"
:
"
development
"
}
success
(
boolean
)
Details
Description
Indicates whether the document was stored successfully
objectId
(
string
(nullable))
Details
Description
Unique object identifier for the stored document
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
error
(
string
(nullable))
Details
Description
Error message if the operation failed
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
putSemanticMemory
= await
client
.
putSemanticMemory
.
create
(
{
document:
'
document
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
putSemanticMemory
.
error
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
put_semantic_memory
=
client.put_semantic_memory.
create
(
document
=
"
document
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
put_semantic_memory.error
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
putSemanticMemory
,
err
:=
client
.
PutSemanticMemory
.
New
(
context
.
TODO
(), raindrop.PutSemanticMemoryNewParams{
Document
:
"
document
"
,
SmartMemoryLocation
: raindrop.PutSemanticMemoryNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
putSemanticMemory
.
Error
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.putsemanticmemory.PutSemanticMemoryCreateParams
;
import
com.raindrop.api.models.putsemanticmemory.PutSemanticMemoryCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
PutSemanticMemoryCreateParams
params
=
PutSemanticMemoryCreateParams
.
builder
()
.
document
(
"
document
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
PutSemanticMemoryCreateResponse
putSemanticMemory
=
client
.
putSemanticMemory
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/put_semantic_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"document": {
"title": "AI Best Practices",
"content": "...",
"category": "development"
}
}
'
Response Examples
200
{
"success"
:
true
,
"objectId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"error"
:
"
example
"
}
POST
/v1/rehydrate_session
Rehydrates a previous session from episodic memory storage.
Allows resuming work from where a previous session left off by restoring
either all memories or just a summary of the previous session.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Session identifier to restore from episodic memory
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
summaryOnly
(
boolean
(nullable))
Details
Description
If true, only restore a summary. If false, restore all memories
Example
false
success
(
boolean
)
Details
Description
Indicates whether the rehydration was successful
operation
(
string
)
Details
Description
Operation status: ‘initiated’ for async processing, ‘failed’ for immediate failure
statusKey
(
string
(nullable))
Details
Description
Storage key for checking async operation status (optional)
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
rehydrateSession
.
rehydrate
(
{
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
response
.
operation
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.rehydrate_session.
rehydrate
(
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
response.operation
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
RehydrateSession
.
Rehydrate
(
context
.
TODO
(), raindrop.RehydrateSessionRehydrateParams{
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.RehydrateSessionRehydrateParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Operation
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.rehydratesession.RehydrateSessionRehydrateParams
;
import
com.raindrop.api.models.rehydratesession.RehydrateSessionRehydrateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
RehydrateSessionRehydrateParams
params
=
RehydrateSessionRehydrateParams
.
builder
()
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
RehydrateSessionRehydrateResponse
response
=
client
.
rehydrateSession
()
.
rehydrate
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/rehydrate_session
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y"
}
'
Response Examples
200
{
"success"
:
true
,
"operation"
:
"
example
"
,
"statusKey"
:
"
example
"
}
POST
/v1/search_episodic_memory
Searches across episodic memory documents stored in the SmartBucket.
Allows finding relevant past sessions based on natural language queries.
Returns summaries and metadata from stored episodic memory sessions.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
terms
(
string
)
Required
Details
Description
Natural language search query to find relevant episodic memory sessions
Example
sessions about user interface preferences
nMostRecent
(
integer
(nullable))
Details
Description
Maximum number of most recent results to return
Example
10
startTime
(
object
(nullable))
Details
Description
Start time for temporal filtering
endTime
(
object
(nullable))
Details
Description
End time for temporal filtering
entries
(
array
)
Details
Description
List of matching episodic memory entries ordered by relevance
pagination
(
object
(nullable))
Details
Description
Pagination information for the search results
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
episodicMemory
.
search
(
{
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
terms:
'
sessions about user interface preferences
'
,
}
);
console
.
log
(
response
.
entries
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.episodic_memory.
search
(
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
terms
=
"
sessions about user interface preferences
"
,
)
print
(
response.entries
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
EpisodicMemory
.
Search
(
context
.
TODO
(), raindrop.QueryEpisodicMemorySearchParams{
SmartMemoryLocation
: raindrop.QueryEpisodicMemorySearchParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
Terms
:
"
sessions about user interface preferences
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Entries
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.episodicmemory.EpisodicMemorySearchParams
;
import
com.raindrop.api.models.query.episodicmemory.EpisodicMemorySearchResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
EpisodicMemorySearchParams
params
=
EpisodicMemorySearchParams
.
builder
()
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
terms
(
"
sessions about user interface preferences
"
)
.
build
()
;
EpisodicMemorySearchResponse
response
=
client
.
query
()
.
episodicMemory
()
.
search
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/search_episodic_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"terms": "sessions about user interface preferences"
}
'
Response Examples
200
{
"entries"
: [
{
"sessionId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"summary"
:
"
User discussed interface preferences and requested dark theme support
"
,
"agent"
:
"
assistant-v1
"
,
"entryCount"
:
25
,
"timelineCount"
:
3
,
"duration"
:
1800000
,
"createdAt"
:
"
2025-05-05T18:36:43.029Z
"
,
"score"
:
0.85
}
],
"pagination"
: {
"total"
:
123
,
"page"
:
123
,
"pageSize"
:
123
,
"totalPages"
:
123
,
"hasMore"
:
true
}
}
POST
/v1/search_memory
Performs semantic search across stored memories using natural language queries.
The system uses vector embeddings to find semantically similar content regardless
of exact keyword matches.
Search features:
Semantic similarity matching
Timeline-specific search
Temporal filtering
Relevance-based ranking
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Unique session identifier for the working memory instance
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
timeline
(
string
(nullable))
Details
Description
Timeline to filter search results
Example
user-conversation
-2024
terms
(
string
)
Required
Details
Description
Natural language search query
Example
user interface preferences
nMostRecent
(
integer
(nullable))
Details
Description
Maximum number of most recent results to return
Example
10
startTime
(
object
(nullable))
Details
Description
Start time for temporal filtering
endTime
(
object
(nullable))
Details
Description
End time for temporal filtering
memories
(
array
)
Details
Description
List of matching memory entries ordered by relevance
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
memory
.
search
(
{
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
terms:
'
user interface preferences
'
,
}
);
console
.
log
(
response
.
memories
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.memory.
search
(
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
terms
=
"
user interface preferences
"
,
)
print
(
response.memories
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
Memory
.
Search
(
context
.
TODO
(), raindrop.QueryMemorySearchParams{
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.QueryMemorySearchParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
Terms
:
"
user interface preferences
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Memories
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.memory.MemorySearchParams
;
import
com.raindrop.api.models.query.memory.MemorySearchResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
MemorySearchParams
params
=
MemorySearchParams
.
builder
()
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
terms
(
"
user interface preferences
"
)
.
build
()
;
MemorySearchResponse
response
=
client
.
query
()
.
memory
()
.
search
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/search_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y",
"terms": "user interface preferences"
}
'
Response Examples
200
{
"memories"
: [
{
"id"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"sessionId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"timeline"
:
"
user-conversation-2024
"
,
"by"
:
"
assistant-v1
"
,
"dueTo"
:
"
user-input
"
,
"content"
:
"
User prefers dark theme for the interface
"
,
"at"
:
"
2025-05-05T18:36:43.029Z
"
,
"key"
:
"
user-preference-theme
"
,
"agent"
:
"
assistant-v1
"
}
]
}
POST
/v1/search_procedures
Searches procedures using text matching across keys and values.
Supports filtering by procedure keys, values, or both with fuzzy matching
and relevance scoring.
TODO: Future enhancement will include vector search for semantic similarity.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
terms
(
string
)
Required
Details
Description
Search terms to match against procedure keys and values
Example
system prompt
nMostRecent
(
integer
(nullable))
Details
Description
Maximum number of results to return
Example
10
searchKeys
(
boolean
(nullable))
Details
Description
Whether to search in procedure keys
Example
true
searchValues
(
boolean
(nullable))
Details
Description
Whether to search in procedure values
Example
true
proceduralMemoryId
(
string
(nullable))
Details
Description
Optional procedural memory ID to use for actor isolation
Example
demo-smartmemory
procedures
(
array
)
Details
Description
List of matching procedures ordered by relevance
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
procedures
.
search
(
{
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
terms:
'
system prompt
'
,
}
);
console
.
log
(
response
.
procedures
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.procedures.
search
(
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
terms
=
"
system prompt
"
,
)
print
(
response.procedures
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
Procedures
.
Search
(
context
.
TODO
(), raindrop.QueryProcedureSearchParams{
SmartMemoryLocation
: raindrop.QueryProcedureSearchParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
Terms
:
"
system prompt
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
Procedures
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.procedures.ProcedureSearchParams
;
import
com.raindrop.api.models.query.procedures.ProcedureSearchResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
ProcedureSearchParams
params
=
ProcedureSearchParams
.
builder
()
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
terms
(
"
system prompt
"
)
.
build
()
;
ProcedureSearchResponse
response
=
client
.
query
()
.
procedures
()
.
search
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/search_procedures
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"terms": "system prompt"
}
'
Response Examples
200
{
"procedures"
: [
{
"key"
:
"
TechnicalReportSystemPrompt
"
,
"value"
:
"
You are a technical documentation assistant...
"
,
"createdAt"
:
"
2025-05-05T18:36:43.029Z
"
,
"updatedAt"
:
"
2025-05-05T18:36:43.029Z
"
}
]
}
POST
/v1/search_semantic_memory
Searches across semantic memory documents using natural language queries.
Uses vector embeddings and semantic similarity to find relevant knowledge
documents regardless of exact keyword matches.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
needle
(
string
)
Required
Details
Description
Natural language search query to find relevant documents
Example
AI development best practices
success
(
boolean
)
Details
Description
Indicates whether the search was performed successfully
documentSearchResponse
(
object
(nullable))
Details
Description
Search results with matching documents
error
(
string
(nullable))
Details
Description
Error message if the search failed
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
query
.
semanticMemory
.
search
(
{
needle:
'
AI development best practices
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
response
.
documentSearchResponse
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.query.semantic_memory.
search
(
needle
=
"
AI development best practices
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
response.document_search_response
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
Query
.
SemanticMemory
.
Search
(
context
.
TODO
(), raindrop.QuerySemanticMemorySearchParams{
Needle
:
"
AI development best practices
"
,
SmartMemoryLocation
: raindrop.QuerySemanticMemorySearchParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
.
DocumentSearchResponse
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.query.semanticmemory.SemanticMemorySearchParams
;
import
com.raindrop.api.models.query.semanticmemory.SemanticMemorySearchResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
SemanticMemorySearchParams
params
=
SemanticMemorySearchParams
.
builder
()
.
needle
(
"
AI development best practices
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
SemanticMemorySearchResponse
response
=
client
.
query
()
.
semanticMemory
()
.
search
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/search_semantic_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"needle": "AI development best practices"
}
'
Response Examples
200
{
"success"
:
true
,
"documentSearchResponse"
: {
"results"
: [
{
"chunkSignature"
:
"
example
"
,
"text"
:
"
example
"
,
"source"
:
"
example
"
,
"payloadSignature"
:
"
example
"
,
"score"
:
0.85
,
"embed"
:
"
example
"
,
"type"
:
"
example
"
}
]
},
"error"
:
"
example
"
}
POST
/v1/start_session
Starts a new working memory session for an agent. Each session provides
isolated memory operations and automatic cleanup capabilities.
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Details
Description
Unique identifier for the new session
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
startSession
= await
client
.
startSession
.
create
(
{
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
startSession
.
sessionId
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
start_session
=
client.start_session.
create
(
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
start_session.session_id
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
startSession
,
err
:=
client
.
StartSession
.
New
(
context
.
TODO
(), raindrop.StartSessionNewParams{
SmartMemoryLocation
: raindrop.StartSessionNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
startSession
.
SessionID
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.startsession.StartSessionCreateParams
;
import
com.raindrop.api.models.startsession.StartSessionCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
StartSessionCreateParams
params
=
StartSessionCreateParams
.
builder
()
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
StartSessionCreateResponse
startSession
=
client
.
startSession
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/start_session
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
}
}
'
Response Examples
200
{
"sessionId"
:
"
01jxanr45haeswhay4n0q8340y
"
}
POST
/v1/summarize_memory
Generates intelligent summaries of a collection of memories using AI.
Can optionally accept custom system prompts to guide the summarization style.
The summarization system:
Identifies key themes and patterns
Extracts important events and decisions
Maintains temporal context
Supports custom summarization instructions
Schema Reference
Request
Response
Request Body
smartMemoryLocation
(
object
)
Required
Details
Description
Smart memory locator for targeting the correct smart memory instance
Example
{
"smartMemory"
: {
"name"
:
"
memory-name
"
,
"application_name"
:
"
demo
"
,
"version"
:
"
1234
"
}
}
sessionId
(
string
)
Required
Details
Description
Unique session identifier for the working memory instance
Example
01
jxanr
45
haeswhay
4
n
0
q
8340
y
memoryIds
(
array
)
Required
Details
Description
List of memory IDs to summarize
Example
[
"
01jxanr45haeswhay4n0q8340y
"
,
"
01jxanr45haeswhay4n0q8341z
"
]
systemPrompt
(
string
(nullable))
Details
Description
Optional custom system prompt for summarization
Example
Summarize the key decisions and action items
summary
(
string
)
Details
Description
AI-generated summary of the memories
Example
The conversation focused on user interface preferences...
summarizedMemoryIds
(
array
)
Details
Description
List of memory IDs that were summarized
JavaScript
Python
Go
Java
CLI
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
summarizeMemory
= await
client
.
summarizeMemory
.
create
(
{
memoryIds:
[
'
01jxanr45haeswhay4n0q8340y
'
,
'
01jxanr45haeswhay4n0q8341z
'
]
,
sessionId:
'
01jxanr45haeswhay4n0q8340y
'
,
smartMemoryLocation: { smartMemory: { name:
'
memory-name
'
, application_name:
'
demo
'
, version:
'
1234
'
} },
}
);
console
.
log
(
summarizeMemory
.
summarizedMemoryIds
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
summarize_memory
=
client.summarize_memory.
create
(
memory_ids
=
[
"
01jxanr45haeswhay4n0q8340y
"
,
"
01jxanr45haeswhay4n0q8341z
"
],
session_id
=
"
01jxanr45haeswhay4n0q8340y
"
,
smart_memory_location
=
{
"
smartMemory
"
: {
"
name
"
:
"
memory-name
"
,
"
application_name
"
:
"
demo
"
,
"
version
"
:
"
1234
"
,
}
}
,
)
print
(
summarize_memory.summarized_memory_ids
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/shared
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
summarizeMemory
,
err
:=
client
.
SummarizeMemory
.
New
(
context
.
TODO
(), raindrop.SummarizeMemoryNewParams{
MemoryIDs
: []
string
{
"
01jxanr45haeswhay4n0q8340y
"
,
"
01jxanr45haeswhay4n0q8341z
"
},
SessionID
:
"
01jxanr45haeswhay4n0q8340y
"
,
SmartMemoryLocation
: raindrop.SummarizeMemoryNewParamsSmartMemoryLocation{
SmartMemory
: shared.LiquidmetalV1alpha1SmartMemoryNameParam{
ApplicationName
:
raindrop
.
String
(
"
my-app
"
),
Name
:
"
memory-name
"
,
Version
:
raindrop
.
String
(
"
1234
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
summarizeMemory
.
SummarizedMemoryIDs
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.summarizememory.SummarizeMemoryCreateParams
;
import
com.raindrop.api.models.summarizememory.SummarizeMemoryCreateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
SummarizeMemoryCreateParams
params
=
SummarizeMemoryCreateParams
.
builder
()
.
addMemoryId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
addMemoryId
(
"
01jxanr45haeswhay4n0q8341z
"
)
.
sessionId
(
"
01jxanr45haeswhay4n0q8340y
"
)
.
smartMemoryLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartMemory
"
,
Map
.
of
(
"
name
"
,
"
memory-name
"
,
"
application_name
"
,
"
demo
"
,
"
version
"
,
"
1234
"
)
)))
.
build
()
;
SummarizeMemoryCreateResponse
summarizeMemory
=
client
.
summarizeMemory
()
.
create
(
params
)
;
}
}
Terminal window
# coming soon
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/summarize_memory
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_memory_location": {
"smartMemory": {
"name": "memory-name",
"application_name": "demo",
"version": "1234"
}
},
"session_id": "01jxanr45haeswhay4n0q8340y",
"memory_ids": [
"01jxanr45haeswhay4n0q8340y",
"01jxanr45haeswhay4n0q8341z"
]
}
'
Response Examples
200
{
"summary"
:
"
The conversation focused on user interface preferences...
"
,
"summarizedMemoryIds"
: [
"
example
"
]
}
Previous
Object Operations
Next
SmartSQL

Smart SQL
URL: https://docs.liquidmetal.ai/sdk/examples/smart-sql/
Smart SQL
The Smart SQL service provides intelligent SQL query execution capabilities with natural language
to SQL conversion and automatic metadata management. It enables users to interact
with databases using both direct SQL queries and natural language descriptions.
POST
/v1/execute_query
Executes a SQL query or converts natural language to SQL and executes it.
Supports both direct SQL execution and AI-powered natural language to SQL conversion.
Automatically handles metadata updates and PII detection for data governance.
Features:
Direct SQL query execution
Natural language to SQL conversion using AI
Automatic metadata tracking for schema changes
PII detection for security
Multiple output formats (JSON, CSV)
Schema Reference
Request
Response
Request Body
smartSqlLocation
(
object
)
Required
Details
Description
Smart SQL locator for targeting the correct smart SQL instance
Example
{
"smartSql"
: {
"name"
:
"
analytics-sql
"
,
"version"
:
"
v1.2.0
"
,
"application_name"
:
"
data-analytics-app
"
}
}
sqlQuery
(
string
(nullable))
Details
Description
Direct SQL query to execute (mutually exclusive with text_query)
Example
SELECT * FROM users WHERE active =
true
textQuery
(
string
(nullable))
Details
Description
Natural language query to convert to SQL (mutually exclusive with sql_query)
Example
Show me all active users from the last month
format
(
object
(nullable))
Details
Description
Desired output format for query results
Example
json
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
response
= await
client
.
executeQuery
.
execute
(
{
smartSqlLocation: {
smartSql: { name:
'
analytics-sql
'
, version:
'
v1.2.0
'
, application_name:
'
data-analytics-app
'
},
},
}
);
console
.
log
(
response
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
response
=
client.execute_query.
execute
(
smart_sql_location
=
{
"
smart_sql
"
: {
"
name
"
:
"
analytics-sql
"
}
}
,
)
print
(
response
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
response
,
err
:=
client
.
ExecuteQuery
.
Execute
(
context
.
TODO
(), raindrop.ExecuteQueryExecuteParams{
SmartSqlLocation
: raindrop.ExecuteQueryExecuteParamsSmartSqlLocation{
SmartSql
: raindrop.ExecuteQueryExecuteParamsSmartSqlLocationSmartSql{
Name
:
"
analytics-sql
"
,
ApplicationName
:
raindrop
.
String
(
"
data-analytics-app
"
),
Version
:
raindrop
.
String
(
"
v1.2.0
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
response
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.executequery.ExecuteQueryExecuteParams
;
import
com.raindrop.api.models.executequery.ExecuteQueryExecuteResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
ExecuteQueryExecuteParams
params
=
ExecuteQueryExecuteParams
.
builder
()
.
smartSqlLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartSql
"
,
Map
.
of
(
"
name
"
,
"
analytics-sql
"
,
"
version
"
,
"
v1.2.0
"
,
"
application_name
"
,
"
data-analytics-app
"
)
)))
.
build
()
;
ExecuteQueryExecuteResponse
response
=
client
.
executeQuery
()
.
execute
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/execute_query
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_sql_location": {
"smartSql": {
"name": "analytics-sql",
"version": "v1.2.0",
"application_name": "data-analytics-app"
}
}
}
'
Response Examples
200
{}
POST
/v1/get_metadata
Retrieves database schema metadata for a smart SQL instance.
Returns table structures, column information, and sample data
that can be used for AI context or application development.
Metadata includes:
Table names and structures
Column names and data types
Sample data for AI context
Schema versioning information
Schema Reference
Request
Response
Request Body
smartSqlLocation
(
object
)
Required
Details
Description
Smart SQL locator for targeting the correct smart SQL instance
Example
{
"smartSql"
: {
"name"
:
"
analytics-sql
"
,
"version"
:
"
v1.2.0
"
,
"application_name"
:
"
data-analytics-app
"
}
}
tableName
(
string
(nullable))
Details
Description
Optional table name to filter metadata
Example
users
tables
(
array
)
Details
Description
List of table metadata entries
lastUpdated
(
object
(nullable))
Details
Description
Timestamp when metadata was last updated
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
getMetadata
= await
client
.
getMetadata
.
retrieve
(
{
smartSqlLocation: {
smartSql: { name:
'
analytics-sql
'
, version:
'
v1.2.0
'
, application_name:
'
data-analytics-app
'
},
},
}
);
console
.
log
(
getMetadata
.
lastUpdated
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
get_metadata
=
client.get_metadata.
retrieve
(
smart_sql_location
=
{
"
smart_sql
"
: {
"
name
"
:
"
analytics-sql
"
}
}
,
)
print
(
get_metadata.last_updated
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
getMetadata
,
err
:=
client
.
GetMetadata
.
Get
(
context
.
TODO
(), raindrop.GetMetadataGetParams{
SmartSqlLocation
: raindrop.GetMetadataGetParamsSmartSqlLocation{
SmartSql
: raindrop.GetMetadataGetParamsSmartSqlLocationSmartSql{
Name
:
"
analytics-sql
"
,
ApplicationName
:
raindrop
.
String
(
"
data-analytics-app
"
),
Version
:
raindrop
.
String
(
"
v1.2.0
"
)}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
getMetadata
.
LastUpdated
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.getmetadata.GetMetadataRetrieveParams
;
import
com.raindrop.api.models.getmetadata.GetMetadataRetrieveResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
GetMetadataRetrieveParams
params
=
GetMetadataRetrieveParams
.
builder
()
.
smartSqlLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartSql
"
,
Map
.
of
(
"
name
"
,
"
analytics-sql
"
,
"
version
"
,
"
v1.2.0
"
,
"
application_name
"
,
"
data-analytics-app
"
)
)))
.
build
()
;
GetMetadataRetrieveResponse
getMetadata
=
client
.
getMetadata
()
.
retrieve
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/get_metadata
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_sql_location": {
"smartSql": {
"name": "analytics-sql",
"version": "v1.2.0",
"application_name": "data-analytics-app"
}
}
}
'
Response Examples
200
{
"tables"
: [
{
"tableName"
:
"
users
"
,
"columns"
: [
{
"columnName"
:
"
user_id
"
,
"dataType"
:
"
INTEGER
"
,
"sampleData"
:
"
123
"
,
"nullable"
:
true
,
"isPrimaryKey"
:
true
}
],
"createdAt"
:
"
2025-05-05T18:36:43.029Z
"
,
"updatedAt"
:
"
2025-05-05T18:36:43.029Z
"
}
],
"lastUpdated"
:
"
2025-05-05T18:36:43.029Z
"
}
POST
/v1/get_pii_data
Retrieves PII detection results for specific database records.
Returns detailed information about detected personally identifiable
information for compliance and auditing purposes.
PII information includes:
Entity types detected
Confidence scores
Character positions
Detection timestamps
Schema Reference
Request
Response
Request Body
smartSqlLocation
(
object
)
Required
Details
Description
Smart SQL locator for targeting the correct smart SQL instance
Example
{
"smartSql"
: {
"name"
:
"
analytics-sql
"
,
"version"
:
"
v1.2.0
"
,
"application_name"
:
"
data-analytics-app
"
}
}
tableName
(
string
)
Required
Details
Description
Table name to retrieve PII data from
Example
users
recordId
(
string
(nullable))
Details
Description
Optional record identifier to filter PII data
Example
user_
123
piiDetections
(
array
)
Details
Description
List of PII detection results
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
getPiiData
= await
client
.
getPiiData
.
retrieve
(
{
smartSqlLocation: {
smartSql: { name:
'
analytics-sql
'
, version:
'
v1.2.0
'
, application_name:
'
data-analytics-app
'
},
},
tableName:
'
users
'
,
}
);
console
.
log
(
getPiiData
.
piiDetections
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
get_pii_data
=
client.get_pii_data.
retrieve
(
smart_sql_location
=
{
"
smart_sql
"
: {
"
name
"
:
"
analytics-sql
"
}
}
,
table_name
=
"
users
"
,
)
print
(
get_pii_data.pii_detections
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
getPiiData
,
err
:=
client
.
GetPiiData
.
Get
(
context
.
TODO
(), raindrop.GetPiiDataGetParams{
SmartSqlLocation
: raindrop.GetPiiDataGetParamsSmartSqlLocation{
SmartSql
: raindrop.GetPiiDataGetParamsSmartSqlLocationSmartSql{
Name
:
"
analytics-sql
"
,
ApplicationName
:
raindrop
.
String
(
"
data-analytics-app
"
),
Version
:
raindrop
.
String
(
"
v1.2.0
"
)}},
TableName
:
"
users
"
,
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
getPiiData
.
PiiDetections
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.getpiidata.GetPiiDataRetrieveParams
;
import
com.raindrop.api.models.getpiidata.GetPiiDataRetrieveResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
GetPiiDataRetrieveParams
params
=
GetPiiDataRetrieveParams
.
builder
()
.
smartSqlLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartSql
"
,
Map
.
of
(
"
name
"
,
"
analytics-sql
"
,
"
version
"
,
"
v1.2.0
"
,
"
application_name
"
,
"
data-analytics-app
"
)
)))
.
tableName
(
"
users
"
)
.
build
()
;
GetPiiDataRetrieveResponse
getPiiData
=
client
.
getPiiData
()
.
retrieve
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/get_pii_data
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_sql_location": {
"smartSql": {
"name": "analytics-sql",
"version": "v1.2.0",
"application_name": "data-analytics-app"
}
},
"table_name": "users"
}
'
Response Examples
200
{
"piiDetections"
: [
{
"detectionId"
:
"
01jxanr45haeswhay4n0q8340y
"
,
"tableName"
:
"
users
"
,
"recordId"
:
"
user_123
"
,
"entities"
: [
{
"entityType"
:
"
EMAIL
"
,
"confidenceScore"
:
0.95
,
"detectedText"
:
"
john.doe@example.com
"
,
"startPosition"
:
25
,
"endPosition"
:
46
,
"tokenIndex"
:
5
}
],
"detectedAt"
:
"
2025-05-05T18:36:43.029Z
"
}
]
}
POST
/v1/update_metadata
Updates database schema metadata manually.
Allows for explicit metadata management when automatic detection
is insufficient or needs correction.
Use cases:
Manual schema corrections
Bulk metadata updates
Custom metadata annotations
Schema Reference
Request
Response
Request Body
smartSqlLocation
(
object
)
Required
Details
Description
Smart SQL locator for targeting the correct smart SQL instance
Example
{
"smartSql"
: {
"name"
:
"
analytics-sql
"
,
"version"
:
"
v1.2.0
"
,
"application_name"
:
"
data-analytics-app
"
}
}
tables
(
array
)
Required
Details
Description
Table metadata to update or create
mode
(
object
(nullable))
Details
Description
Update mode: replace (overwrite), merge (preserve existing), or append (only new entries)
Example
UPDATE_MODE_MERGE
success
(
boolean
)
Details
Description
Indicates whether the update was successful
tablesUpdated
(
integer
)
Details
Description
Number of tables updated
JavaScript
Python
Go
Java
curl
import
Raindrop
from
'
@liquidmetal-ai/lm-raindrop
'
;
const
client
=
new
Raindrop
();
const
updateMetadata
= await
client
.
updateMetadata
.
update
(
{
smartSqlLocation: {
smartSql: { name:
'
analytics-sql
'
, version:
'
v1.2.0
'
, application_name:
'
data-analytics-app
'
},
},
tables:
[{}]
,
}
);
console
.
log
(
updateMetadata
.
success
);
from
raindrop
import
Raindrop
client
=
Raindrop
()
update_metadata
=
client.update_metadata.
update
(
smart_sql_location
=
{
"
smart_sql
"
: {
"
name
"
:
"
analytics-sql
"
}
}
,
tables
=
[
{}
],
)
print
(
update_metadata.success
)
package
main
import
(
"
context
"
"
fmt
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk
"
"
github.com/LiquidMetal-AI/lm-raindrop-go-sdk/option
"
)
func
main
() {
client
:=
raindrop
.
NewClient
(
option
.
WithAPIKey
(
"
My API Key
"
),
)
updateMetadata
,
err
:=
client
.
UpdateMetadata
.
Update
(
context
.
TODO
(), raindrop.UpdateMetadataUpdateParams{
SmartSqlLocation
: raindrop.UpdateMetadataUpdateParamsSmartSqlLocation{
SmartSql
: raindrop.UpdateMetadataUpdateParamsSmartSqlLocationSmartSql{
Name
:
"
analytics-sql
"
,
ApplicationName
:
raindrop
.
String
(
"
data-analytics-app
"
),
Version
:
raindrop
.
String
(
"
v1.2.0
"
)}},
Tables
: []raindrop.UpdateMetadataUpdateParamsTable{raindrop.UpdateMetadataUpdateParamsTable{
}},
})
if
err
!=
nil
{
panic
(
err
.
Error
())
}
fmt
.
Printf
(
"
%+v
\n
"
,
updateMetadata
.
Success
)
}
package
com.raindrop.api.example
;
import
com.raindrop.api.client.RaindropClient
;
import
com.raindrop.api.client.okhttp.RaindropOkHttpClient
;
import
com.raindrop.api.core.JsonValue
;
import
com.raindrop.api.models.updatemetadata.UpdateMetadataUpdateParams
;
import
com.raindrop.api.models.updatemetadata.UpdateMetadataUpdateResponse
;
import
java.util.Map
;
public
final
class
Main
{
private
Main
()
{}
public
static
void
main
(
String
[]
args
)
{
RaindropClient
client
=
RaindropOkHttpClient
.
fromEnv
()
;
UpdateMetadataUpdateParams
params
=
UpdateMetadataUpdateParams
.
builder
()
.
smartSqlLocation
(
JsonValue
.
from
(
Map
.
of
(
"
smartSql
"
,
Map
.
of
(
"
name
"
,
"
analytics-sql
"
,
"
version
"
,
"
v1.2.0
"
,
"
application_name
"
,
"
data-analytics-app
"
)
)))
.
addTable
(
UpdateMetadataUpdateParams
.
Table
.
builder
()
.
build
())
.
build
()
;
UpdateMetadataUpdateResponse
updateMetadata
=
client
.
updateMetadata
()
.
update
(
params
)
;
}
}
Terminal window
curl
-X
POST
"
https://api.raindrop.run/v1/update_metadata
"
\
-H
"
Authorization: Bearer lm_apikey_...
"
\
-H
"
Content-Type: application/json
"
\
-d
'
{
"smart_sql_location": {
"smartSql": {
"name": "analytics-sql",
"version": "v1.2.0",
"application_name": "data-analytics-app"
}
},
"tables": [
{}
]
}
'
Response Examples
200
{
"success"
:
true
,
"tablesUpdated"
:
123
}
Previous
SmartMemory
