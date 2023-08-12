import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading/Loading';

function App() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [successUrl, setSuccessUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post('https://free-storage.onrender.com/api/v1/file/upload', {
        name: name,
        url: url,
      });
      setSuccessUrl(response.data.url)
      console.log('Data sent successfully:', response.data.url);
    } catch (error) {
      console.error('Error sending data:', error);
    }
    setLoading(false)
  };

  return (
    <div>
      {loading === true ? <Loading /> : <div></div>}
      <div className="App">
      <h1>File Upload App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>File URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {successUrl}
      </div>
    </div>
    </div>
  );
}

export default App;
