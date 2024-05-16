import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { twoSum } from "./LeetCode/Problem1"; // Assuming both files are in the same directory

const LeetCode: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // Initialize state with an empty array
  const [results, setResults] = useState<number[][]>([]);

  // Example inputs
  const nums1 = [2, 7, 11, 15];
  const target1 = 9;
  const nums2 = [3, 2, 4];
  const target2 = 6;
  const nums3 = [3, 3];
  const target3 = 6;

  // Function to calculate results and update state
  // useEffect(() => {
  //   setResults([
  //     twoSum(nums1, target1),
  //     twoSum(nums2, target2),
  //     twoSum(nums3, target3),
  //   ]);
  // }, []); // Empty dependency array ensures this effect runs only once

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
              <div>
                {results.length > 0 && JSON.stringify(results[0])}

                {results.length > 1 && JSON.stringify(results[1])}

                {results.length > 2 && JSON.stringify(results[2])}
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>
              <h2 style={{ textAlign: "center" }}>Problem 2</h2>
              <div>Test</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>
              <h2 style={{ textAlign: "center" }}>Problem 3</h2>
              <div>Test</div>
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
