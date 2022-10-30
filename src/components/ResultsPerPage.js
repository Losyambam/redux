import { useDispatch } from "react-redux";
import { useSliceActions, useSliceSelector } from "./SliceProvider";

const ResultsPerPage = () => {
  const dispatch = useDispatch();
  const { resultsPerPage } = useSliceSelector();
  const { updateResultsPerPage } = useSliceActions();
  return (
    <div>
      Showing
      <select
        value={resultsPerPage}
        onChange={(event) => dispatch(updateResultsPerPage(event.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">40</option>
      </select>
    </div>
  );
};

export default ResultsPerPage;
