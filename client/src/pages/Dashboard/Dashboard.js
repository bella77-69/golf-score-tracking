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
  const [userData, setUserData] = useState({ user: null, scorecards: [] });

  // Fetch user and score data when the component mounts
  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5000/users').then((res) => res.json()),
      fetch('http://localhost:5000/scores').then((res) => res.json()),
    ])
      .then(([userData, scoreData]) => {
        // Assuming data is an array of users and scores, extract the first user and score objects
        const firstUser = userData[0];
        const firstScore = scoreData[0];
        setUserData({ user: firstUser, scorecards: [firstScore] }); // Update the state with the extracted user and score data
        console.log(firstUser, firstScore);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Destructure the user and scorecards from the state
  const { user, scorecards } = userData;

  // Render the component only when user data is available
  if (!user) {
    return <div>Loading...</div>;
  }

  // Replace the following line with your logout logic.
  const handleLogout = () => {
    window.location.href = '/login';
    console.log('Logged out'); // Replace this with actual logout logic
  };

  return (
    <div className="dashboard">
      <UserProfileSummary user={user} />
      <ScoreCardOverview scorecards={scorecards} />
      <ScoreCardDetails selectedScorecard={scorecards[0]} />
      <AddNewRound />
      <Stats courseStats={[]} />
      <ProgressCharts progressData={[]} />
      <AchievementsBadges achievements={[]} />
      <PersonalGoals goals={[]} />
      <Notifications notifications={[]} />
      <UserSettings user={user} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;