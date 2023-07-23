// import React, { useState, useEffect } from 'react';

// function Dashboard(props) {
//     const [courses, setCourses] = useState([]);
//     const [search, setSearch] = useState("");
//     const [filteredCourses, setFilteredCourses] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://localhost:5000/courses")
//             .then((res) => res.json())
//             .then((data) => {
//                 setCourses(data);
//                 console.log(data);
//                 setLoading(false);
//             });
//     }, []);

//     useEffect(() => {
//         setFilteredCourses(
//             courses.filter((course) => {
//                 return course.location.toLowerCase().includes(search.toLowerCase());
//             })
//         );
//     }, [search, courses]);

//     if (loading) {
//         return <h1>Loading...</h1>;
//     }

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         window.location.href = ('/login');
//     };

//     return (
//         <div className="dashboard-page">
//         <h1>Welcome to the Dashboard</h1>
//         <button onClick={handleLogout}>Logout</button>
//         <div className="container">
//             <h1 className="text-center">Courses</h1>
//             <div className="row">
//                 <div className="col-md-4">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="form-control"
//                         onChange={(e) => setSearch(e.target.value)}
//                     />

//                   </div>
//                     <div className="col-md-8">
//                         <table className="table table-striped">
//                             <thead>
//                                 <tr>
//                                     <th>Name</th>
//                                     <th>Location</th>
//                                     <th>Par</th>
//                                     <th>Rating</th>
//                                     <th>Slope</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filteredCourses.map((course) => (
//                                     <tr key={course.id}>
//                                         <td>{course.name}</td>
//                                         <td>{course.location}</td>
//                                         <td>{course.par}</td>
//                                         <td>{course.rating}</td>
//                                         <td>{course.slope}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                       </div>
//                       </div>
//                       </div>    
//       </div>
//     );
// }

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import UserProfileSummary from '../../components/User/UserProfileSummary';
import ScoreCardOverview from '../../components/Scores/ScoreCardOverview';
import ScoreCardDetails from '../../components/Scores/ScoreCardDetails';
import AddNewRound from '../../components/Scores/AddNewRound';
import Stats from '../../components/Scores/Stats';
import ProgressCharts from '../../components/Scores/ProgressCharts';
import AchievementsBadges from '../../components/User/AchievementsBadges';
import PersonalGoals from '../../components/User/PersonalGoals';
import Notifications from '../../components/User/Notifications';
import UserSettings from '../../components/User/UserSettings';

const Dashboard = () => {
  const [user, setUser] = useState(null); // Initialize user state to null
  const scorecards = []; // Array of scorecards
  const selectedScorecard = null; // Selected scorecard object or null if none selected
  const courseStats = []; // Array of golf course statistics
  const progressData = []; // Array of progress data for charts
  const achievements = []; // Array of earned achievements and badges
  const goals = []; // Array of personal goals
  const notifications = []; // Array of notifications

  // Replace the following line with your logout logic.
  const handleLogout = () => {
    window.location.href = '/login';
    console.log('Logged out'); // Replace this with actual logout logic
  };

// Fetch user data when the component mounts
useEffect(() => {
  fetch('http://localhost:5000/users')
    .then((res) => res.json())
    .then((data) => {
      // Assuming data is an array of users, extract the first user object
      const firstUser = data[0];
      setUser(firstUser); // Update the user state with the extracted user data
      console.log(firstUser);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
}, []);

  // Render the component only when user data is available
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <UserProfileSummary user={user} />
      <ScoreCardOverview scorecards={scorecards} />
      <ScoreCardDetails selectedScorecard={selectedScorecard} />
      <AddNewRound />
      <Stats courseStats={courseStats} />
      <ProgressCharts progressData={progressData} />
      <AchievementsBadges achievements={achievements} />
      <PersonalGoals goals={goals} />
      <Notifications notifications={notifications} />
      <UserSettings user={user} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;