export const fetchAllUniversityList = async () => {
  try{
    const response = await fetch("http://universities.hipolabs.com/search");
    return response.json();
  } catch(err) {
    console.error(err);
    return [];
  }
};

export const searchUniversity = async (name, country) => {
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('country', country);
  try{
    const response = await fetch(`http://universities.hipolabs.com/search?${params.toString()}`);
    return response.json();
  } catch(err) {
    console.error(err);
    return [];
  }
};

export const createSubscriber = async (user) => {
  try{
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return response.json();
  }catch(err) {
    console.error(err);
    return null;
  }
};
