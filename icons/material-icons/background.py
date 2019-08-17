import os
import xml.etree.ElementTree as ET

background_color = "#333"
path = "U:\\Profesal\\projekty\\szablony\\CompanyPersonUI\\icons\\material-icons"


# r=root, d=directories, f = files
for r, d, f in os.walk(path):
    for file in f:
        if '.svg' in file:
            file_name = os.path.join(r, file)
            print("modifing %s" % str(file_name))
            
            tree = ET.parse(file_name) 
            root = tree.getroot()

            # for path in root.iter('*'):
            #     print(str(path.tag))
            for child in root:                
                if 'path' in child.tag and child.get('fill') != 'none':
                    child.set('fill',background_color)
            
            tree.write(file_name)

                
