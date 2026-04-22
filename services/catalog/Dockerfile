FROM python:3.11-slim
WORKDIR /app
RUN pip install fastapi uvicorn
COPY . .
EXPOSE 4000
CMD ["python", "main.py"]