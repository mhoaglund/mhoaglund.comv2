#TODO: iterate over a folder structure with project stuff in it, and output json.

#Folders: Project -> Components -> Details -> *
#                 -> Artifacts -> *

#Project folder contains meta.json, which has thesis, materials, themes

import os                                                                                                             

def list_files(dir):                                                                                                  
    r = []                                                                                                            
    subdirs = [x[0] for x in os.walk(dir)]                                                                            
    for subdir in subdirs:                                                                                            
        files = os.walk(subdir).next()[2]                                                                             
        if (len(files) > 0):                                                                                          
            for file in files:                                                                                        
                r.append(subdir + "/" + file)                                                                         
    return r
