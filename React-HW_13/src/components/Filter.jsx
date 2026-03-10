import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/filter';

function Filter({ filter, dispatch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Поиск по имени..."
        className="w-full px-4 py-3 text-lg border-2 border-slate-300 rounded-lg
                   focus:outline-none focus:border-slate-800
                   transition-colors duration-200"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(Filter);
