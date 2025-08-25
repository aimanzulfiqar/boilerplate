
export const validateEnv = (): void => {
  const requiredEnvVars = ['MONGO_URI', 'MONGO_DB'];
  
  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );
  
  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }

  if (process.env.PORT && isNaN(Number(process.env.PORT))) {
    throw new Error('PORT environment variable must be a number');
  }
};