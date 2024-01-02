/* eslint-disable prettier/prettier */
import { useState } from 'react'
import {
  styled,
  createTheme,
  ThemeProvider,
  Typography,
  Badge,
  Divider,
  List,
  Container,
  CssBaseline,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Box,
  Toolbar,
  IconButton,
  Drawer as MuiDrawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  TableView as TableViewIcon,
} from '@mui/icons-material'
import { useNavigate } from '@remix-run/react'

const drawerWidth = 240
const defaultTheme = createTheme()
const defaultMenus: MenuProps[] = [
  {
    name: 'dashboard',
    icon: <DashboardIcon />,
    path: 'dashboard',
  },
  {
    name: 'opportunity',
    icon: <TableViewIcon />,
    path: 'opportunity',
  },
  {
    name: 'order',
    icon: <TableViewIcon />,
    path: 'order',
  },
]

interface MenuProps {
  name: string
  icon: JSX.Element
  path: string
  children?: MenuProps[]
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (props) => props !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (props) => props !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const Menus = ({ data }: { data: MenuProps[] }) => {
  const navigate = useNavigate()
  return (
    <>
      {data.map((menu) => (
        <ListItemButton key={menu.name} onClick={() => navigate(`/${menu.path}`)}>
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.name} />
        </ListItemButton>
      ))}
    </>
  )
}

export default function DefaultLayout(
  props: Readonly<React.PropsWithChildren>,
) {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Menus data={defaultMenus} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {props.children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
