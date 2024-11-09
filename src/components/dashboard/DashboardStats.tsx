import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  AttachMoney,
  Assessment,
  People,
  TrendingUp,
  Work,
  Message,
  Star,
  Schedule,
  Language,
} from "@mui/icons-material";

// Fake data
const earningsData = [
  { month: "Jan", amount: 3200 },
  { month: "Feb", amount: 4100 },
  { month: "Mar", amount: 3800 },
  { month: "Apr", amount: 4700 },
  { month: "May", amount: 5200 },
  { month: "Jun", amount: 4800 },
];

const projectTypeData = [
  { name: "Web Development", value: 40 },
  { name: "Mobile Apps", value: 30 },
  { name: "UI/UX Design", value: 20 },
  { name: "Data Analysis", value: 10 },
];

const clientSatisfactionData = [
  { month: "Jan", score: 4.2 },
  { month: "Feb", score: 4.5 },
  { month: "Mar", score: 4.3 },
  { month: "Apr", score: 4.7 },
  { month: "May", score: 4.8 },
  { month: "Jun", score: 4.9 },
];

const currentProjects = [
  {
    name: "AI Chatbot Development",
    progress: 75,
    client: "TechCorp",
    dueDate: "2024-07-15",
    budget: 15000,
  },
  {
    name: "E-commerce Website Redesign",
    progress: 50,
    client: "FashionHub",
    dueDate: "2024-08-01",
    budget: 12000,
  },
  {
    name: "Mobile App UI/UX",
    progress: 25,
    client: "HealthTrack",
    dueDate: "2024-08-30",
    budget: 8000,
  },
  {
    name: "Data Visualization Dashboard",
    progress: 10,
    client: "AnalyticsPro",
    dueDate: "2024-09-15",
    budget: 10000,
  },
];

const recentMessages = [
  {
    name: "Alice Johnson",
    message: "Can we schedule a call to discuss the project details?",
    time: "2 hours ago",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Bob Smith",
    message:
      "I've sent you the updated wireframes. Please review when you can.",
    time: "5 hours ago",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Carol Williams",
    message: "The client loved your proposal! They want to move forward.",
    time: "1 day ago",
    avatar: "/avatar3.jpg",
  },
  {
    name: "David Brown",
    message: "Quick question about the API integration. Can you clarify?",
    time: "2 days ago",
    avatar: "/avatar4.jpg",
  },
];

const skillsData = [
  { skill: "React", level: 90 },
  { skill: "Node.js", level: 85 },
  { skill: "Python", level: 75 },
  { skill: "UI/UX Design", level: 80 },
  { skill: "Data Analysis", level: 70 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function EnhancedDashboard() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        minHeight: "100vh",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mb: 4, color: "text.primary" }}
        >
          Freelancer Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Key Metrics */}
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <AttachMoney />
                </Avatar>
                <Box>
                  <Typography variant="h6" component="div">
                    $25,800
                  </Typography>
                  <Typography variant="body2">Total Earnings</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
                  <Work />
                </Avatar>
                <Box>
                  <Typography variant="h6" component="div">
                    7
                  </Typography>
                  <Typography variant="body2">Active Projects</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "success.main", mr: 2 }}>
                  <Star />
                </Avatar>
                <Box>
                  <Typography variant="h6" component="div">
                    4.9/5
                  </Typography>
                  <Typography variant="body2">Client Satisfaction</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "warning.main", mr: 2 }}>
                  <People />
                </Avatar>
                <Box>
                  <Typography variant="h6" component="div">
                    42
                  </Typography>
                  <Typography variant="body2">Total Clients</Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          {/* Earnings Chart */}
          <Grid item xs={12} md={8}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Earnings Overview
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#8884d8" name="Earnings ($)" />
                </BarChart>
              </ResponsiveContainer>
            </Item>
          </Grid>

          {/* Project Types */}
          <Grid item xs={12} md={4}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Project Types Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {projectTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Item>
          </Grid>

          {/* Client Satisfaction Trend */}
          <Grid item xs={12} md={6}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Client Satisfaction Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={clientSatisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#82ca9d"
                    name="Satisfaction Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Item>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Skills Overview
              </Typography>
              {skillsData.map((skill) => (
                <Box key={skill.skill} sx={{ mt: 2 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">{skill.skill}</Typography>
                    <Typography variant="body2">{skill.level}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{ mt: 1 }}
                  />
                </Box>
              ))}
            </Item>
          </Grid>

          {/* Current Projects */}
          <Grid item xs={12}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Current Projects
              </Typography>
              <TableContainer>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="current projects table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell align="right">Client</TableCell>
                      <TableCell align="right">Progress</TableCell>
                      <TableCell align="right">Due Date</TableCell>
                      <TableCell align="right">Budget</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentProjects.map((project) => (
                      <TableRow key={project.name}>
                        <TableCell component="th" scope="row">
                          {project.name}
                        </TableCell>
                        <TableCell align="right">{project.client}</TableCell>
                        <TableCell align="right">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "100%", mr: 1 }}>
                              <LinearProgress
                                variant="determinate"
                                value={project.progress}
                              />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >{`${Math.round(project.progress)}%`}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="right">{project.dueDate}</TableCell>
                        <TableCell align="right">
                          ${project.budget.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>

          {/* Recent Messages */}
          <Grid item xs={12} md={6}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Recent Messages
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {recentMessages.map((message, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={message.name} src={message.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={message.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {message.message}
                          </Typography>
                          {` — ${message.time}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Item>
          </Grid>

          {/* Upcoming Deadlines */}
          <Grid item xs={12} md={6}>
            <Item elevation={3}>
              <Typography variant="h6" gutterBottom component="div">
                Upcoming Deadlines
              </Typography>
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {currentProjects.map((project, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={project.name}
                      secondary={`Due: ${project.dueDate}`}
                    />
                    <Chip
                      label={`${project.progress}%`}
                      color={project.progress > 50 ? "success" : "warning"}
                    />
                  </ListItem>
                ))}
              </List>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
