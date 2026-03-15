import { connect } from 'react-redux';

function User({user}) {
  return (
    <div>
      <h2>User information</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.status}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: { name: state.name, status: state.status },
  };
};

export default connect(mapStateToProps)(User);
