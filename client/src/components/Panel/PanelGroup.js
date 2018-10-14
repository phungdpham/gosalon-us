import React from "react";

const styles = {
    backgroundColor: {
        background: 'white'
    }
}

export const PanelGroup = props => (
    <div className="panel-group" style={styles.backgroundColor}>
        {props.children}
    </div>
);

