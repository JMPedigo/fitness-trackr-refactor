import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Navlink onClick={() => setPage("activities")}>Activities</a>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <Navlink onClick={() => setPage("register")}>Register</Navlink>
            <Navlink onClick={() => setPage("login")}>Login</Navlink>
          </>
        )}
      </nav>
    </header>
  );
}
