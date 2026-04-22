from fastapi import FastAPI
import uvicorn

app = FastAPI(title="Art Catalog Service")

@app.get("/")
def read_root():
    return {
        "service": "Catalog & Inventory",
        "inventory": [
            {"id": 1, "title": "La Noche Estrellada", "price": 1000},
            {"id": 2, "title": "El Grito", "price": 1500}
        ]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4000)