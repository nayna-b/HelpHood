from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# 1. Create a FastAPI app
app = FastAPI()

# 2. Allow React frontend to communicate with backend (CORS policy)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Temporary in-memory data store
help_requests = []

# 4. Define the structure of a help request
class HelpRequest(BaseModel):
    name: str
    contact: str
    description: str
    location: str

# 5. API to submit a new help request
@app.post("/submit-help")
def submit_help(request: HelpRequest):
    help_requests.append(request)
    return {"message": "Help request submitted successfully."}

# 6. API to get all help requests
@app.get("/all-requests", response_model=List[HelpRequest])
def get_requests():
    return help_requests

from fastapi import FastAPI, HTTPException
# (rest of your imports remain the same)

# Add this new endpoint at the bottom:
@app.delete("/delete-request/{index}")
def delete_request(index: int):
    try:
        help_requests.pop(index)
        return {"message": "Request deleted."}
    except IndexError:
        raise HTTPException(status_code=404, detail="Request not found.")
