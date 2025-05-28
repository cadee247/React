import React, { Component, useEffect, useState } from 'react';
import User from './User';
import UserForm from './UserForm';
import firebaseApp from './firebase'; // Import Firebase from a separate setup file
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Function to dynamically load JSON file
const loadJsonData = async (setJsonData) => {
    try {
        const response = await fetch('/test.json'); // Assuming it's in the public folder
        const data = await response.json();
        setJsonData(data);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
};

const FirebaseUploader = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        loadJsonData(setJsonData);
    }, []);

    useEffect(() => {
        if (jsonData && jsonData.users) {
            const db = firebaseApp.database(); // Use imported Firebase instance
            db.ref('users/').set(jsonData.users)
                .then(() => console.log("Data uploaded successfully!"))
                .catch(error => console.error("Error uploading data:", error));
        }
    }, [jsonData]);

    return <div>Uploading test JSON data to Firebase...</div>;
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <FirebaseUploader />
                <Switch>
                    <Route path="/edit/:id" component={UserForm} />
                    <Route exact path="/add" component={UserForm} />
                    <Route exact path="/" component={User} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

class NotFound extends Component {
    render() {
        return <div>Not Found</div>;
    }
}

export default App;