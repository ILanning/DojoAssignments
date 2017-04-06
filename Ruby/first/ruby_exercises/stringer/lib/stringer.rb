require "stringer/version"

module Stringer

  def self.spacify *strings
    string = ""
    strings.each do |s|
      if string == ""
        string += s
      else
        string += " " + s
      end
    end
    return string
  end

  def self.minify string, maxLength
    if string.length <= maxLength
      return string
    end
    return string[0...10] + "..."
  end

  def self.replacify string, replacee, replacer
    front = 0
    result = ""
    replaceeIndex = 0
    for i in (0...string.length)
      if string[i] == replacee[replaceeIndex]
        if replaceeIndex == 0
          result += string[front...i]
          front = i + 1
        end
        replaceeIndex += 1
        if replaceeIndex == replacee.length
          result += replacer
          replaceeIndex = 0
          front = i + 1
        end
      else
        replaceeIndex = 0
      end
    end
    if front != string.length
      result += string[front...string.length]
    end
    return result
  end

  def self.tokenize string
    result = []
    front = 0
    for i in (0..string.length)
      if i == string.length || string[i] == " "
        if front != i
          result.push string[front...i]
        end
        front = i + 1
      end
    end
    return result
  end
  def self.removify string, removee
    front = 0
    result = ""
    removeeIndex = 0
    for i in (0...string.length)
      if string[i] == removee[removeeIndex]
        if removeeIndex == 0
          result += string[front...i]
          front = i + 1
        end
        removeeIndex += 1
        if removeeIndex == removee.length
          i += 1
          removeeIndex = 0
          front = i + 1
        end
      else
        removeeIndex = 0
      end
    end
    if front != string.length
      result += string[front...string.length]
    end
    return result
  end
end
