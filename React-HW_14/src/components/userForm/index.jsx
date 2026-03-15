import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions';

function UserForm({dispatch}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setUserInfo(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Name:
          <input type="text" name="name" id="name" {...register('name', { required: 'Name is required' })} />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>
          Status:
          <input type="text" name="status" id="status" {...register('status', { required: 'Status is required' })} />
        </label>
        {errors.status && <p>{errors.status.message}</p>}
      </div>

      <input type="submit" value={'Save'} />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    status: state.status,
  };
};

export default connect(mapStateToProps)(UserForm);
