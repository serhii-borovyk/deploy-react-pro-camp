import * as React from "react";
import { Fragment } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  content: {
    marginTop: 16
  }
}

const Layout = ({ classes, children }) => (
  <Fragment>
    <div>
      Toolbar, SideDrawer, Backdrop
    </div>
    <main className={classes.content}>
      {children}
    </main>
  </Fragment>
)

export default withStyles(styles)(Layout);