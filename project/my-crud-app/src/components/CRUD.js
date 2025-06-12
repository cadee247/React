import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig"; // Single clean import
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const CRUD = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [category, setCategory] = useState("Creative");
  const [status, setStatus] = useState("Hibernating");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchItems();
  }, []);

  const addItem = async () => {
    if (!newItem.trim()) {
      alert("Please enter a valid project title");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "projects"), {
        title: newItem,
        category,
        status,
        createdAt: new Date(),
      });

      setItems(prevItems => [
        ...prevItems,
        { id: docRef.id, title: newItem, category, status },
      ]);

      setNewItem("");
      setCategory("Creative");
      setStatus("Hibernating");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const updateItem = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteItem = async (id) => {
    try {
      const docRef = doc(db, "projects", id); // Fixed collection reference
      await deleteDoc(docRef);

      setItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="app-container">
      <h2>🗃 Box of Forgotten Projects</h2>
      <input
        type="text"
        placeholder="Project Title"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Creative">Creative</option>
        <option value="Tech">Tech</option>
        <option value="Business">Business</option>
        <option value="Chaos">Chaos</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Hibernating">Hibernating</option>
        <option value="Plotting a Comeback">Plotting a Comeback</option>
        <option value="Resurrected">Resurrected</option>
        <option value="Abandoned">Abandoned</option>
      </select>
      <button onClick={addItem}>Add Project</button>

      {items.length ? (
        items.map((item) => (
          <div key={item.id} className="item-card">
            <div>
              <strong>{item.title}</strong><br />
              <small>{item.category} — {item.status}</small>
            </div>
            <div>
              <button onClick={() => updateItem(item.id)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No projects yet. Start logging your forgotten brilliance!</p>
      )}
    </div>
  );
};

export default CRUD;