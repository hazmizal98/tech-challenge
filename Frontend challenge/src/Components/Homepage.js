import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <Card>
        <CardHeader title="Welcome!" />
        <CardContent>Proceed to Users to view all the users using the application</CardContent>
        <CardContent>Proceed to Albums to view and edit all the albums belonging to each user</CardContent>
        <CardContent>Proceed to Photos to view and edit all the photos belonging to each album</CardContent>
    </Card>
);