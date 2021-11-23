import React from 'react';
import { Grid, TextField } from '@mui/material';

export class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({ ...this.state, value: e.target.value });
        this.props.changeFieldSearchValue(e.target.name, e.target.value);
    }

    render() {
        return (
            <Grid item xs={this.props.searchFieldWidth}>
                <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label={this.props.label}
                        name={this.props.name}
                        value={this.state.value}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
            </Grid>
        );
    }
}