export const logError = (error) => {
    console.error("Logged Error:", error);
  };
  
  export const displayFriendlyError = (error) => {    
    if (error.message) return error.message;
    return "Something went wrong. Please try again later.";
  };  