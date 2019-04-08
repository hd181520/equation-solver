import angr

FIND_ADDR = 0x4005CE
AVOID_ADDR = 0x4005DF

def main():
    proj = angr.Project('example.out', load_options={'auto_load_libs': False})
    s = proj.factory.simulation_manager()
    print s.explore(find=(FIND_ADDR,), avoid=(AVOID_ADDR,))
    return s.found

founds = main()
for found in founds :
    print found.posix.dumps(0)
