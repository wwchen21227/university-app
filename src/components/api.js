export const fetchUniversityList = async () => {
  const response = await fetch("http://universities.hipolabs.com/search");
  return response.json();
};
