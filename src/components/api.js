import { HIPOLABS_SEARCH_API_URL, USER_API_URL } from 'constants';

export const fetchAllUniversityList = async () => {
  try {
    const response = await fetch(HIPOLABS_SEARCH_API_URL);
    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const searchUniversity = async (name, country) => {
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('country', country);
  try {
    const response = await fetch(
      `${HIPOLABS_SEARCH_API_URL}?${params.toString()}`
    );
    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createSubscriber = async (user) => {
  try {
    const response = await fetch(USER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
