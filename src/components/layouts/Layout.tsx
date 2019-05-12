import * as React from "react";
import { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  content: {
    marginTop: 16
  }
}

class Layout extends Component<Props> {
  render() {
    let { classes, children } = this.props;
    return (
      <Fragment>
        <div>
          Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.content}>
          {children}
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Layout);

interface Props {
  classes: { content: string },
  children: any
};