import axios from 'axios';

import { getFromLocalStorage } from './storage';

export const api = () => {
  const token = getFromLocalStorage(process.env.jwtStorageName);

  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer${token}`;

  return axios.create({
    baseURL: 'http://localhost:8082',

    headers
  });
};

/* 
sample return object 
[
    {
        "applicationId": 1,
        "transcriptPath": "asdawdaw",
        "applicationRequest": "awdawasdaw",
        "studentCertificate": "asdawdaw",
        "political": "adasdwada",
        "studentName": "Özgürhan",
        "studentSurname": "Polat",
        "studentNumber": "260201035"
    },
    {
        "applicationId": 2,
        "transcriptPath": "asdawdaw",
        "applicationRequest": "addsss",
        "studentCertificate": "asdwa",
        "political": "ladwadasd",
        "studentName": "Bugra Onur",
        "studentSurname": "Genç",
        "studentNumber": "260201064"
    }
]



*/
export const getApplications = async () => {
  let res = null;
  await api()
    .get('/applications')
    .then((response) => {
      res = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

/* 

Return Object 
if a student applies for an application already then this json object is sent by backend
{
    "applicationId": 1,
    "transcriptPath": "asdawdaw",
    "applicationRequest": "awdawasdaw",
    "studentCertificate": "asdawdaw",
    "political": "adasdwada",
    "userId": 1,
    "isSubmittedApplication": true
}

if a student doesn't apply for an application already then this json object is sent by backend

{
    "applicationId": null,
    "transcriptPath": null,
    "applicationRequest": null,
    "studentCertificate": null,
    "political": null,
    "userId": null,
    "isSubmittedApplication": false
}

*/

export const getApplicationById = async (userId) => {
  let res = null;
  try {
    const { data } = await api().get('/applications/user/' + userId);
    res = data;
  } catch (err) {
    console.log(err);
  }
  return res;
};

/* 
Sample Data to send 
{
      transcriptPath : "transcript01",
      applicationRequest : "applicationRequest01",
      studentCertificate : "studentCertificate01",
      political : "political01",
      userId : 1
    }
Here userId must be unique for each application.

if you send above data again then you get this error:
  httpStatus: "INTERNAL_SERVER_ERROR"
  message: "There is already an application with user Id : 1"
  timeStamp: "2023-05-31T23:23:02.021663"
*/

export const createAnApplication = async (applicationReq) => {
  let res = null;
  try {
    res = await axios
      .post('http://localhost:8082/applications', {
        transcriptPath: applicationReq.transcriptPath,
        applicationRequest: applicationReq.applicationRequest,
        studentCertificate: applicationReq.studentCertificate,
        political: applicationReq.political,
        userId: applicationReq.userId,
        applicationId: applicationReq.applicationId
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
  return res;
};

/* you should send Only changed fields but I don't know how to be made in react  */
export const updateApplication = async (updatedApplication) => {
  let res = null;
  try {
    res = axios.put('http://localhost:8082/applications', {
      applicationId: updateApplication.applicationId,
      transcriptPath: updateApplication.transcriptPath,
      applicationRequest: updateApplication.applicationRequest,
      studentCertificate: updateApplication.studentCertificate,
      political: updateApplication.studentCertificate
    });
  } catch (err) {
    console.log(err);
  }
};

export const approveApplication = (applicationId) => {
    return axios.post("http://localhost:8082/applications/approve/6",{});
    
}