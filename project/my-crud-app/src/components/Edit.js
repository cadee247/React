import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Creative");
  const [newStatus, setNewStatus] = useState("Hibernating");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem(docSnap.data());
          setNewTitle(docSnap.data().title);
          setNewCategory(docSnap.data().category);
          setNewStatus(docSnap.data().status);
        } else {
          console.log("Item not found, redirecting...");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
        navigate("/");
      }
    };

    fetchItem();
  }, [id, navigate]);

 const handleUpdate = async () => {
  if (!newTitle.trim()) return alert("Title can't be empty!");

  try {
    await updateDoc(doc(db, "projects", id), {
      title: newTitle,
      category: newCategory,
      status: newStatus,
    });

    alert("Project updated!");
    navigate("/crud"); 
  } catch (error) {
    console.error("Error updating project:", error);
  }
};

  return item ? (
    <div className="app-container">
      <h2>Edit Project</h2>
      
      <input 
        type="text" 
        value={newTitle} 
        onChange={e => setNewTitle(e.target.value)}
      />

      <select value={newCategory} onChange={e => setNewCategory(e.target.value)}>
        <option value="Creative">Creative</option>
        <option value="Tech">Tech</option>
        <option value="Business">Business</option>
        <option value="Chaos">Chaos</option>
      </select>

      <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
        <option value="Hibernating">Hibernating</option>
        <option value="Plotting a Comeback">Plotting a Comeback</option>
        <option value="Resurrected">Resurrected</option>
        <option value="Abandoned">Abandoned</option>
      </select>

      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Edit;