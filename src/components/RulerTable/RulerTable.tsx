import { useState } from "react";
import "./rulerTable.scss";
import Dialog from '@mui/material/Dialog';
const RulerTable = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="ruler-chart-wrapper">
      <div className="ruler-btn" onClick={handleOpenClose}>
        <i className="fa-solid fa-ruler-combined"></i>
        Sizes chart
      </div>
      <Dialog open={isOpen} onClose={handleOpenClose}>
        <div className="modal-custom">
          <div className="modal-custom-header">Sizes chart</div>
          <div className="ruler-table">
            <table>
              <tr>
                <th>Height</th>
                <th>Weight</th>
                <th>Age</th>
                <th>Size</th>
              </tr>
              <tr>
                <td>49-60cm</td>
                <td>3-4 kg</td>
                <td>0-2 months</td>
                <td>50-56</td>
              </tr>
              <tr>
                <td>61-68cm</td>
                <td>5-8kg</td>
                <td>2-6 months</td>
                <td>62-68</td>
              </tr>
              <tr>
                <td>69-80cm</td>
                <td>9-11kg</td>
                <td>6-12 months</td>
                <td>74-80</td>
              </tr>
              <tr>
                <td>81-92cm</td>
                <td>12-14kg</td>
                <td>1-2 years</td>
                <td>86-92</td>
              </tr>
            </table>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default RulerTable;
