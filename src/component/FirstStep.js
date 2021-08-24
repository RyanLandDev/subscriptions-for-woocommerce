import React,{useContext} from 'react';
import { FormGroup,FormControlLabel,Checkbox,FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../store/store';
import { __ } from '@wordpress/i18n';
const useStyles = makeStyles({
    margin: {
      marginBottom: '20px',
    },
});
const FirstStep = (props) => {
    const classes = useStyles();
    const ctx = useContext(Context);
    return(
        <> 
            <h3 className="mwb-title">{ __( 'General Settings', 'subscriptions-for-woocommerce' ) }</h3>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={ctx.formFields['EnablePlugin']}
                        onChange={ctx.changeHandler}
                        name="EnablePlugin"
                        color="primary"
                    />
                    }
                    label= {__('Check this box to enable the subscription','subscriptions-for-woocommerce')}
                    className="mwbFormLabel" />
            </FormGroup>
            <FormControl component="fieldset" fullWidth className="fieldsetWrapper">
                <TextField 
                value={ctx.formFields['AddToCartText']}
                onChange={ctx.changeHandler} 
                id="AddToCartText" 
                name="AddToCartText" 
                label={__('Add to cart text','subscriptions-for-woocommerce')}  variant="outlined" className={classes.margin}/>
            </FormControl>
            <FormControl component="fieldset" fullWidth className="fieldsetWrapper">
                <TextField 
                value={ctx.formFields['PlaceOrderText']}
                onChange={ctx.changeHandler} 
                id="PlaceOrderText" 
                name="PlaceOrderText" 
                label={__('Place order text','subscriptions-for-woocommerce')}  variant="outlined" className={classes.margin}/>
            </FormControl>
        </>
    )
}
export default FirstStep;