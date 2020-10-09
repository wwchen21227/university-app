import * as api from './api';

describe('University api', () => {

  it('fetchAllUniversityList', async () => {
    const fakeUniversityResponse = [{
      "name": "Marywood University",
      "state-province": null,
      "alpha_two_code": "PA",
      "country": "United States",
      "web_pages": [
        "http://www.marywood.edu"
      ],
      "domains": [
        "marywood.edu"
      ]
    }];

    const mockFetchAllUniversityList = jest.spyOn(api, 'fetchAllUniversityList')
        .mockImplementation(() => Promise.resolve(fakeUniversityResponse));

    const response = await api.fetchAllUniversityList();

    expect(mockFetchAllUniversityList).toHaveBeenCalled();
    expect(response).toEqual(fakeUniversityResponse);
  });

  it('searchUniversity', async () => {
    const fakeUniversityResponse = [{
      "name": "Marywood University",
      "state-province": null,
      "alpha_two_code": "PA",
      "country": "United States",
      "web_pages": [
        "http://www.marywood.edu"
      ],
      "domains": [
        "marywood.edu"
      ]
    }];

    const mockSearchUniversity = jest.spyOn(api, 'searchUniversity')
        .mockImplementation(() => Promise.resolve(fakeUniversityResponse));

    const response = await api.searchUniversity('national', 'singapore');

    expect(mockSearchUniversity).toHaveBeenCalled();
    expect(response).toEqual(fakeUniversityResponse);
  });

  it('createSubscriber', async () => {
    const fakeResponse = {status: 'ok'};

    const mockCreateSubscriber = jest.spyOn(api, 'createSubscriber').mockImplementation(() => Promise.resolve(fakeResponse));

    const response = await api.createSubscriber({email: 'tester@hotmail.com'});

    expect(mockCreateSubscriber).toHaveBeenCalled();
    expect(response).toEqual(fakeResponse);
  });


});
