import React, { useState, useEffect } from "react";

type Props = {
  id: string;
};

export default function User(props: Props) {
  const [user, setUser] = useState(null);

  async function fetchUserData(id: string) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return <div>"loading..."</div>;
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}
