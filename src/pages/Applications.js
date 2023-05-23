import Header from '../layouts/Header';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { showErrorNotification, showSuccessNotification } from '../helpers/toasts';
import classNames from 'classnames';
import Footer from '../layouts/Footer';

const Applications = () => {
  const userContext = useContext(UserContext);
  const [transcript, setTranscript] = useState('');
  const [politicalPartyDoc, setPoliticalPartyDoc] = useState('');
  const [studentCertificate, setStudentCertificate] = useState('');
  const [letter, setLetter] = useState('');

  const checkFormat = (applications) => {
    let validFormat = true;
    Object.keys(applications).forEach((fileName) => {
      const res = applications[fileName].split('.');
      if (res[1] !== 'pdf') {
        validFormat = false;
      }
    });
    return validFormat;
  };

  const handleSubmit = () => {
    if (!transcript || !politicalPartyDoc || !studentCertificate || !letter) {
      showErrorNotification(
        'Some documents are missing. Please be sure that you uploaded 4 documents that are listed on the page.'
      );
      return false;
    }

    const applications = {
      transcript: transcript,
      politicalPartyDoc: politicalPartyDoc,
      studentCertificate: studentCertificate,
      letter: letter
    };

    if (!checkFormat(applications)) {
      showErrorNotification(
        'Files are in unsupported format. Please be sure that you uploaded in the requested format.'
      );
      return;
    }

    userContext.setApplications(applications);
    showSuccessNotification(
      'Documents have been sent successfully and Student has applied successfully.'
    );
  };

  useEffect(() => {
    if (userContext.applications) {
      setTranscript(userContext.applications['transcript']);
      setPoliticalPartyDoc(userContext.applications['politicalPartyDoc']);
      setStudentCertificate(userContext.applications['studentCertificate']);
      setLetter(userContext.applications['letter']);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-center-top">
      <Header />
      <div className="main mt-4">
        <div className="row justify-content-center pb-2">
          <p className="h4 text-danger font-weight-bold">
            {userContext.applications
              ? 'Thank you! You uploaded all your necessary documents.'
              : 'Please upload all necessary documents if you want be a candidate.'}
          </p>
        </div>
        <form className="max-w-3xl mx-auto bg-light border border-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="p-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="transcript">
                Transcript{' '}
                <span className="text-info h6">( Should be in .pdf (max 2MB) format)</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="transcript"
                type="file"
                onChange={(e) => setTranscript(e.target.files[0].name)}
              />
              {userContext.applications && transcript && (
                <p className="text-success">
                  <i className="fa fa-check" /> File uploaded : {transcript}
                </p>
              )}
            </div>
            <div className="p-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="PartyDocument">
                Political Party Document{' '}
                <span className="text-info h6">( Should be in .pdf (max 2MB) format)</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="PartyDocument"
                name="PartyDocument"
                type="file"
                onChange={(e) => setPoliticalPartyDoc(e.target.files[0].name)}
              />
              {userContext.applications && politicalPartyDoc && (
                <p className="text-success">
                  <i className="fa fa-check" /> File uploaded : {politicalPartyDoc}
                </p>
              )}
            </div>
            <div className="p-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="transcript">
                Student Certificate{' '}
                <span className="text-info h6">( Should be in .pdf (max 2MB) format)</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentCertificate"
                name="studentCertificate"
                type="file"
                onChange={(e) => setStudentCertificate(e.target.files[0].name)}
              />
              {userContext.applications && studentCertificate && (
                <p className="text-success">
                  <i className="fa fa-check" /> File uploaded : {studentCertificate}
                </p>
              )}
            </div>
            <div className="p-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="PartyDocument">
                Letter of Application{' '}
                <span className="text-info h6">( Should be in .pdf (max 2MB) format)</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="letter"
                name="letter"
                type="file"
                onChange={(e) => setLetter(e.target.files[0].name)}
              />
              {userContext.applications && letter && (
                <p className="text-success">
                  <i className="fa fa-check" /> File uploaded : {letter}
                </p>
              )}
            </div>
          </div>
          <button
            className={classNames(
              'bg-red-700 rounded-full text-white font-bold py-2 px-4 rounded',
              {
                'bg-red-400': userContext.applications,
                'hover:bg-red-600': !userContext.applications
              }
            )}
            type="button"
            onClick={handleSubmit}
            disabled={userContext.applications}>
            > Submit Documents
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Applications;
