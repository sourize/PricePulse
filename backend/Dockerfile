# Use the official Python 3.9 image
FROM python:3.9-slim

# Set the working directory to /code
WORKDIR /code

# Copy the current directory contents into the container at /code
COPY ./requirements.txt /code/requirements.txt

# Install requirements
# Use tensorflow-cpu to stay within resource limits if needed, though HF spaces usually have more RAM than Render
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy the rest of the application
COPY . /code

# Create a non-root user for security (recommended by HF)
RUN useradd -m -u 1000 user
USER user
ENV HOME=/home/user \
	PATH=/home/user/.local/bin:$PATH

# Expose port 7860 (Hugging Face Spaces default)
EXPOSE 7860

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
