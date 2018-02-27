import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
    palette: {
        disabledColor: '#409cd1',
        pickerHeaderColor: '#409cd1',
        primary2Color: '#409cd1',
        // clockCircleColor: '#cd2222',
        shadowColor: '#000000',
        primary1Color: '#409cd1'
    },
    datePicker: {},
    textField: {},
});

export const textFieldStyle = {
    width:'auto !important',
    border: '1px solid #CCCCCC',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px'
}