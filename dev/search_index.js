var documenterSearchIndex = {"docs":
[{"location":"test/","page":"Test","title":"Test","text":"a = 1\nb = 2\na + b\n\n# output\n\n3","category":"page"},{"location":"test/","page":"Test","title":"Test","text":"beginaligned\nnablacdotmathbfE  = 4 pi rho \nnablacdotmathbfB  = 0 \nnablatimesmathbfE = - frac1c fracpartialmathbfBpartial t \nnablatimesmathbfB = - frac1c left(4 pi mathbfJ + fracpartialmathbfEpartial t right)\nendaligned","category":"page"},{"location":"test/","page":"Test","title":"Test","text":"julia> a = 1\n1\n\njulia> b = 2;\n\njulia> c = 3;  # comment\n\njulia> a + b + c\n6","category":"page"},{"location":"test/","page":"Test","title":"Test","text":"link to Example.jl Documentation\nlink to func(x)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = RoughSurface","category":"page"},{"location":"#RoughSurface","page":"Home","title":"RoughSurface","text":"","category":"section"},{"location":"#Functions","page":"Home","title":"Functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [RoughSurface]","category":"page"},{"location":"#RoughSurface.read_surf-Tuple{Any}","page":"Home","title":"RoughSurface.read_surf","text":"read_surf()\n\n从文件读取表面数据, 与写入数据保持一致, 默认txt文件的数据用制表符分割, csv文件的数据用``,''分割, jld2则为直接保存二进制文件.\n\n\n\n\n\n","category":"method"},{"location":"#RoughSurface.show_surf-Tuple{Any}","page":"Home","title":"RoughSurface.show_surf","text":"show_surf()\n\n利用python的pyvista包显示规则表面数据.\n\n\n\n\n\n","category":"method"},{"location":"#RoughSurface.write_surf-Tuple{Any,Any}","page":"Home","title":"RoughSurface.write_surf","text":"write_surf()\n\n将表面数据写入文件, 默认txt文件的数据用制表符分割, csv文件的数据用``,''分割, jld2则为直接保存二进制文件\n\n\n\n\n\n","category":"method"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using RoughSurface\n\nsurf_mat = Base.rand(Float64, (480, 640));\nfile_path = \"test.csv\";\n\n# 将表面数据surf_mat写入当前路径的test.csv文件\nwrite_surf(file_path, surf_mat);\n\n# 从当前路径的test.csv文件读取surf_mat\nsurf_read = read_surf(file_path);\n\n# 显示表面数据surf_mat\nshow_surf(surf_mat);","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
