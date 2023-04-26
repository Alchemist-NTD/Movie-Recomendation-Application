from .models import Matrix
import numpy as np

def my_scheduled_job():
  matrix_1 = Matrix.objects.all().first()
  modified_matrix = np.frombuffer(matrix_1.matrix, dtype=np.int64).reshape(2, 3)
  modified_matrix = np.array([[i + 1 for i in x] for x in modified_matrix])
  matrix_1.matrix = modified_matrix.tobytes()
  matrix_1.save()
