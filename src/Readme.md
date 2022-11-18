<!-- blog list  -->
<TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>UserName</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Hobby</StyledTableCell>
              <StyledTableCell align="right">id</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.hobby}</StyledTableCell>
                  <StyledTableCell align="right">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group">
                      <Button style={{marginRight:"5px"}} color="success"
                      onClick={() => navigate(`/editUser/${user.id}`)}>Edit</Button>
                      <Button color='error' onClick={() => handleDelete(user.id)}>
                        Delete
                        </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

//////////////////////////////////////////////////////
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//////////////////////////////////////////////////

User detail: {}
"email":
"username":
"password":
"image":
"first_name":
"last_name":
"phone-number":
"bio":
"birthdate":

<!-- button group codes -->
<!-- <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        style={{ marginRight: "5px" }}
                        color="success"
                        onClick={() => navigate(`/editUser/${user.id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup> -->


                    ////////////////////////////

