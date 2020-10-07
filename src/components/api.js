export const fetchUniversityList = async () => {
  const response = await fetch("http://universities.hipolabs.com/search");
  return response.json();
};

export const searchUniversity = async (name, country) => {
  let params = new URLSearchParams();
  params.append('name', name);
  params.append('country', country);

  const response = await fetch(`http://universities.hipolabs.com/search?${params.toString()}`);
  return response.json();
};
