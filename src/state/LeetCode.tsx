import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const LeetCode: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h2
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        LeetCode
      </h2>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <div>
              <h2 style={{ textAlign: "center" }}>Problem 1</h2>
              <div>Testing</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>
              <h2 style={{ textAlign: "center" }}>Problem 2</h2>
              <div>Testing</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>
              <h2 style={{ textAlign: "center" }}>Problem 3</h2>
              <div>Testing</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>
              <h2 style={{ textAlign: "center" }}>Problem 4</h2>
              <div>Testing</div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeetCode;
