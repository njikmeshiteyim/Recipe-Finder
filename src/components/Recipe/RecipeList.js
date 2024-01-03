import React, {useState} from "react";
import "./RecipeList.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";


const RecipeList = (props) => {
  const [open, setOpen] = useState(false);
  const {name,image, ingredientLines } = props;

  return (
    <div>
      <div className="rapper">
        <img
          src={image}
          className="imgs"
          alt="Loading..."
        />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <Button onClick={() => setOpen(true)}>Open ingredient</Button>
          <Dialog
            open = {open}
            onClose={() => setOpen(false)}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
          >
            <DialogTitle id="dialog-title">Ingredientlist</DialogTitle>
            <DialogContent id="dialog-description">
            <ul>
        {ingredientLines && ingredientLines.map((ing) => (
            <li>{ing}</li>
          ))}
        </ul>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setOpen(false)}>OK</Button>
            </DialogActions>
          </Dialog>
        
      </div>
    </div>
  );
};
export default RecipeList;