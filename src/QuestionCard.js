import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function QuestionCard(props) {
  const { question = {}, questionNumber, submitAnswer } = props;
  const [value, setValue] = React.useState(null);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>

          <Typography variant="h5" component="div">
            Question {questionNumber}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {question.title}
          </Typography>

          <FormControl>
            <RadioGroup name="radio-group-quiz" value={value} onChange={handleChangeRadio}>
              {question.options.map((o, i) => {
                return <FormControlLabel key={i + 1} value={i + 1} control={<Radio />} label={o.description} />
              })}
            </RadioGroup>
          </FormControl>


        </CardContent>
        <CardActions>
          <Button disabled={!value} onClick={handleSubmit} fullWidth variant="outlined" size="small">Submit</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
