import { createMuiTheme } from "@material-ui/core";

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#131313",
      light: "#ade498",
      dark: "#35CD99",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ffe0f7",
      light: "#fe91ca",
      dark: "#d3dbff",
      contrastText: "#fff"
    },
    background: {
      default: "#131313"
    },
    text: {
      primary: "#35CD99",
      secondary: "#fff"
    }
  },
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: "normal"
    },
    h1: {
      fontWeight: "bold",
      fontSize: "5em"
    },
    h3: {
      fontSize: "3em",
      fontWeight: "bold"
    }
  },
  // Overriding Material UI components
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 15,
        color: "#fff"
      },
      textPrimary: {
        color: "#35CD99"
      }
    },
    MuiCheckbox: {
      colorPrimary: {
        "&$checked": {
          color: "#fff"
        },
        color: "#5E6872"
      }
    },
    MuiTableContainer: {
      root: {
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "block",
          width: "0.4em"
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#5E6872",
          outline: "1px solid #5E6872"
        }
      }
    },
    MuiTable: {
      stickyHeader: {
        borderTop: "1px solid #5E6872",
        boxShadow: "none",
        backgroundColor: "#131313",
        border: "none"
      }
    },
    MuiTableRow: {
      root: { borderTop: "1px solid #5E6872" }
    },
    MuiTableCell: {
      head: {
        borderColor: "#5E6872",
        backgroundColor: "transparent",
        color: "#5E6872"
      },
      body: {
        borderColor: "#5E6872",
        backgroundColor: "transparent",
        color: "#fff",
        height: 50,
        fontWeight: "bold",
        fontSize: "1em"
      },
      stickyHeader: {
        borderColor: "#5E6872",
        backgroundColor: "#131313",
        color: "#5E6872"
      }
    },
    MuiDialog: {
      paper: {
        backgroundColor: "#1F1B24"
        // width: "400px",
      }
    },
    MuiMenu: {
      list: {
        backgroundColor: "#131313"
      }
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: "#131313"
      }
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        color: "#fff",
        backgroundColor: "#131313"
      },
      dayLabel: {
        color: "#fff"
      }
    },
    MuiPickersDay: {
      day: {
        color: "#fff"
      },
      daySelected: {
        backgroundColor: "#35CD99"
      },
      dayDisabled: {
        color: "gray"
      },
      current: {
        color: "#fff"
      }
    }
  }
});

export default theme;
