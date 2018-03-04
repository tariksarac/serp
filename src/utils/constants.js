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

export const labelStyle = {
    height: '43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

};
export const iconStyle = {
    height: 'auto',
    width:'auto',
    padding: '0px,',
    top: '13px',
    border: '0px',
};
export const activeItemStyle = {
    color: '#409CD1'
};