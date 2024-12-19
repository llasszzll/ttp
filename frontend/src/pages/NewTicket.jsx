import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [concern, setConcern] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ concern, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <section className="heading">Create New Ticket</section>
      <p>Please fill out the from below</p>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        {/* <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input type="text" className="form-control" value={number} />
        </div> */}

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="concern">Concern</label>
            <select
              name="concern"
              id="concern"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
            >
              <option value="Mental Health">Mental Health</option>
              <option value="Marital Worries">Marital Worries</option>
              <option value="Job/Work Stress">Job/Work Stress</option>
              <option value="Feeling of Guilt">Feeling of Guilt</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Substance Abuse">Substance Abuse</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Tell us about your Concern</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
