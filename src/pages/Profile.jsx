import { useEffect, useState } from "react";

export default function Profile(){
      const [user, setUser] = useState("");
    
    useEffect(() => {
    const fetchUser = async () => {
      try {
        const res2 = await fetch(`/data/mockProfile.json`);
        const data2 = await res2.json();
        setUser(data2);
      } catch (error) {
        console.error("Failed find user, error");
      }
    };
    fetchUser();
  }, []);
    return (
        <>
            <h1>wiuhu</h1>
        </>
    )
}