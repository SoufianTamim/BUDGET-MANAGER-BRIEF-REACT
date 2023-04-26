import Button from '@mui/material/Button';

export default function AddButton({ButtonName,type}) {
  return (
      <Button type={type} variant="contained" color="success">
        {ButtonName}
      </Button>
  );
}